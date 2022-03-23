/* eslint-disable sort-imports */
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { TranslateService } from '@ngx-translate/core';
import { Subscription } from 'rxjs';
import { ApiService } from 'src/app/api.service';
import { TYPE_OPTIONS } from 'src/app/global.constants';
import { issue } from 'src/app/models/issue.model';
import { user } from 'src/app/models/user.model';

interface status {
  value: number | string;
  name: string;
}

interface statuses {
  id: number;
  statusName: string;
}

interface assignees {
  id: number;
  name: string;
}
@Component({
  selector: 'app-issue-details',
  templateUrl: './issue-details.component.html',
  styleUrls: ['./issue-details.component.scss']
})
export class IssueDetailsComponent implements OnInit {
  componentName!: string;
  status!: string;
  toggleStatus = false;
  id!: string;
  data!: issue;
  comments: any;
  commentL: any;
  issues: any;
  projectId!: string;
  newComment!: string;
  priority = ['HIGH', 'MEDIUM', 'LOW'];
  assigneeTeamName!: string;
  assigneeList!: user[];
  assignee!: user;
  private routeSub!: Subscription;


  // constructor(
  //   private apiService: ApiService,
  //   private router: Router,
  //   private route: ActivatedRoute
  // ) {}

  constructor(translate: TranslateService, 
              public router: Router,
              private apiService: ApiService,
              private route: ActivatedRoute) {
    translate.setDefaultLang('en');
    translate.use(localStorage.getItem("lang") || 'en');
  }

  
  ngOnInit(): void {
    this.routeSub = this.route.params.subscribe((params) => {
      this.id = params['id'];
    });

    this.fetchIssueDetailsbyId(this.id);
  }
  type = TYPE_OPTIONS;
  statuses: status[] = [
    { value: 1, name: 'TO DO' },
    { value: 2, name: 'DEVELOPMENT' },
    { value: 3, name: 'TESTING' },
    { value: 4, name: 'COMPLETED' }
  ];



  assignees!: assignees[];

  toggleCommentBox() {
    this.toggleStatus = !this.toggleStatus;
  }

  changeStatus() {
    this.apiService.updateIsuueStatus(this.data.id, this.status).subscribe();
  }

  fetchIssueDetailsbyId(id: string) {
    this.apiService.fetchIssueById(id).subscribe(
      (res: any) => {
        this.data = res;
        console.log(this.data);
        this.projectId = res.projectID;
        this.assignee = res.assignee.id;
        this.status = res.status;
        this.apiService
          .getCommentsByIssueIdAndProjectId(id, this.projectId)
          .subscribe(
            (res: any) => {
              this.comments = res;
            },
            () => {
              //alert('Some Error Occured!!!');
            }
          );

        this.apiService.getProjects().subscribe((res: any) => {
          for (let i of res) {
            if (i.projectID == this.projectId)
              this.assigneeTeamName = i.projectOwner.teamName;
            this.apiService
              .getTeammembersByTeamName(this.assigneeTeamName)
              .subscribe((res) => {
                this.assigneeList = res;
              });
          }
        });
      },
      () => {
        //alert('Some Error in fetching Occured!!!');
      }
    );
  }

  postComment() {
    this.apiService
      .postCommentByIssueIdAndProjectId(
        this.id,
        this.projectId,
        this.newComment
      )
      .subscribe(() => {
        this.newComment = '';
        this.fetchIssueDetailsbyId(this.id);
      }),
      () => {
        //alert('Post Comment Error');
      };
  }

  changeAsignee() {
    this.apiService
      .updateIsuueAssignee(this.data.id, this.assignee.id)
      .subscribe();
  }

  sendDataToCreateIssues() {
    console.log(this.data);
    this.router.navigate(['create-issue'], {
      queryParams: { issueId: this.data.id }
    });
  }
}
