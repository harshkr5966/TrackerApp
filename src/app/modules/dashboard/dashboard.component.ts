import { AppState } from './../../app.state';
import { AddIssues } from './../../../actions/issue.actions';
import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { Store } from '@ngrx/store';
import { TranslateService } from '@ngx-translate/core';
import { Observable } from 'rxjs';
import { ApiService } from 'src/app/api.service';
import { PRIORITY_OPTIONS, STATUS_MAPPER } from 'src/app/global.constants';
import { ISSUES_LIST } from './dashboard.constants';
import { dropdownOptions, Issue, Project } from './dashboard.model';
import * as IssueActions from '../../../actions/issue.actions'
import { Router } from '@angular/router';


@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {
  projectControl = new FormControl();
  assigneeFormControl = new FormControl();
  priorityFormControl = new FormControl();

  projectOptions!: dropdownOptions[];
  issueList!: Issue[];
  projectList!: Project[];
  selectedProject: Project = new Project();
  assigneeOptions!: dropdownOptions[];
  priorityOptions = PRIORITY_OPTIONS;
  projectOwner = '';
  issues: { name: string; statusValue: number; issues: Issue[] }[] =
    Array.from(ISSUES_LIST);

  // issuesArrayList!: Observable<{ issueList: Issue[] }>;
  issuesArrayList!: Observable< Issue[] >;
  // issuesArrayList!: Observable<any>;
  

  // constructor(private apiService: ApiService) {}
  constructor(translate: TranslateService, 
    private apiService: ApiService,
    private store : Store<AppState>, public router: Router
    ) {
    translate.setDefaultLang('en');
    translate.use(localStorage.getItem("lang") || 'en');
  }

  ngOnInit(): void {
    this.getProjectsAndIssues();

    this.apiService.getUsers().subscribe((users) => {
      const userList: dropdownOptions[] = [];

      users.map((user) => {
        userList.push({
          key: user.name,
          value: user.id
        });
      });
      this.assigneeOptions = userList;
    });

    this.store.subscribe(resol =>
      console.log(resol)
      );
    
    //Fetching issues from ngrx store
    this.issuesArrayList = this.store.select('issueList');

    //Iterating over observable
    this.issuesArrayList.subscribe((res) => {
      res.forEach(val => {
        Object.keys(STATUS_MAPPER).forEach((statusCode) => {
          // console.log(val)
          if (Number(statusCode) === val.status) {
            this.issues.forEach((issueType) => {
              if (issueType.statusValue === Number(statusCode)) {
                issueType.issues.push(val);
              }
            });
          }
        });
      })
    })

    // this.issuesArrayList.subscribe((res) => {
    //   res.forEach(val => {
    //     Object.keys(STATUS_MAPPER).forEach((statusCode) => {
    //       if (Number(statusCode) === val.status) {
    //         this.issues.forEach((issueType) => {
    //           if (issueType.statusValue === Number(statusCode)) {
    //             issueType.issues.push(val);
    //           }
    //         });
    //       }
    //     });
    //   })
    // })
    //---------CLOSE----------------------Iterating over observable

    
  }

  /**
   * get all projects
   */
  getProjectsAndIssues() {
    this.apiService.getAllProjects().subscribe((res) => {
      this.projectList = res;
      const options: dropdownOptions[] = [];

      res.map((item) => {
        options.push({
          key: item.projectName,
          value: item.projectID
        });
      });

      this.projectOptions = options;
      this.selectedProject = res[0];
      this.projectOwner = this.selectedProject.projectOwner.name;
      this.projectControl = new FormControl(this.selectedProject.projectID);
      this.getAllIssues(this.selectedProject.projectID);
    });
  }

  /**
   * get issues related to a project
   */
  getAllIssues(projectId: string) {
    for (let issueType of this.issues) {
      issueType.issues = [];
    }

    //storing it in 
    this.apiService.getIssuesOfProject(projectId).subscribe((response) => {
      this.store.dispatch(new IssueActions.AddIssues(response));
    });
  }

  /**
   * fetch all issues related to the selected project
   */
  onProjectChange(projectId: string) {
    for (let issueType of this.issues) {
      issueType.issues = [];
    }
    this.issues = ISSUES_LIST.map((val) => {
      return { ...val, issues: [] };
    });
    this.getAllIssues(projectId);
    this.selectedProject = this.projectList.filter(
      (val) => val.projectID === projectId
    )[0];
    this.projectOwner = this.selectedProject.projectOwner.name;
  }

  
}
