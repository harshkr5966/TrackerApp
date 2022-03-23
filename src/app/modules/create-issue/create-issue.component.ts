import { DialogComponentComponent } from './dialog-component/dialog-component.component';
import { Component, Inject, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ApiService } from 'src/app/api.service';
import { PRIORITY_OPTIONS, TYPE_OPTIONS } from 'src/app/global.constants';
import { dropdownOptions } from '../dashboard/dashboard.model';
import {MatDialog, MAT_DIALOG_DATA} from '@angular/material/dialog';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-create-issue',
  templateUrl: './create-issue.component.html',
  styleUrls: ['./create-issue.component.scss']
})
export class CreateIssueComponent implements OnInit {
  project: dropdownOptions[] = [];
  assignees: dropdownOptions[] = [];
  type = TYPE_OPTIONS;
  priority = PRIORITY_OPTIONS;

  createIssueForm = new FormGroup({
    summary: new FormControl('', [
      Validators.required,
      Validators.maxLength(150)
    ]),
    type: new FormControl('', Validators.required),
    projectID: new FormControl('', Validators.required),
    description: new FormControl(''),
    priority: new FormControl('', Validators.required),
    assignee: new FormControl('', Validators.required),
    storyPoint: new FormControl('', [Validators.required]),
    tags: new FormControl([]),
    status: new FormControl(1),
    sprint: new FormControl('', Validators.required)
  });
  projectId: any;
  data: any;
  assigneeTeamName: any;
  asigneeList: any;
  id: any;

  constructor(    
    public dialog: MatDialog,
    private apiService: ApiService,
    private router: Router,
    private route: ActivatedRoute,
    translate: TranslateService
  ) {
    translate.setDefaultLang('en');
    translate.use(localStorage.getItem("lang") || 'en');
  }



  ngOnInit(): void {
    this.route.queryParams.subscribe((params) => {
      this.id = params['issueId'];
      console.log(this.id);
    });
    if (this.id) {
      this.apiService.fetchIssueById(this.id).subscribe(
        (res: any) => {
          this.data = res;
          this.projectId = res.projectID;
          console.log(this.data);
          this.apiService.getProjects().subscribe((res: any) => {
            for (let i of res) {
              if (i.projectID == this.projectId)
                this.assigneeTeamName = i.projectOwner.teamName;
              this.apiService
                .getTeammembersByTeamName(this.assigneeTeamName)
                .subscribe((res) => {
                  this.asigneeList = res;
                });
            }
          });
          this.createIssueForm.patchValue({
            summary: this.data.summary,
            type: this.data.type,
            projectID: this.data.projectID,
            description: this.data.description,
            priority: this.data.priority,
            assignee: this.data.assignee.id,
            tags: this.data.tags,
            sprint: this.data.sprint,
            storyPoint: this.data.storyPoint
          });
        },
        () => {
          alert('Some Error Occured!!!');
        }
      );
    }

    this.apiService.getAllProjects().subscribe((data) => {
      data.forEach((arr) => {
        this.project.push({ key: arr.projectName, value: arr.projectID });
      });
    });

    this.apiService.getUsers().subscribe((data) => {
      data.forEach((arr) => {
        this.assignees.push({ key: arr.name, value: arr.id });
      });
    });
  }

  /**
   * Function to call an api to create new issue
   */
  submitForm() {
    this.apiService.createNewIssue(this.createIssueForm.value).subscribe(
      (data: any) => {
        //redirect to project page
        this.router.navigateByUrl('/project-board');
      },
      (err) => {
        alert(err.err);
      }
    );
  }

  resetForm() {
    this.createIssueForm.reset();
  }

  openDialog(){
      let dialogRef = this.dialog.open(DialogComponentComponent)
      dialogRef.afterClosed().subscribe(result =>{
        console.log(`Dialog result: ${result}`);
      });
  } 
}


