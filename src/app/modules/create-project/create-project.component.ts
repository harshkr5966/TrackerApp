import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { TranslateService } from '@ngx-translate/core';
import { ApiService } from 'src/app/api.service';
import { dropdownOptions } from '../dashboard/dashboard.model';

@Component({
  selector: 'app-create-project',
  templateUrl: './create-project.component.html',
  styleUrls: ['./create-project.component.scss']
})
export class CreateProjectComponent implements OnInit {
  owners: dropdownOptions[] = [];

  constructor(translate: TranslateService, private apiService: ApiService, private router: Router) {
    translate.setDefaultLang('en');
    translate.use(localStorage.getItem("lang") || 'en');
  }

  createNewProject = new FormGroup({
    projectName: new FormControl('', [
      Validators.required,
      Validators.maxLength(150)
    ]),
    projectOwner: new FormControl('', Validators.required),
    projectStartDate: new FormControl('', null),
    projectEndDate: new FormControl('', null)
  });

  ngOnInit(): void {
    this.apiService.getUsers().subscribe((data) => {
      data.forEach((arr) => {
        this.owners.push({ key: arr.name, value: arr.id });
      });
    });
  }

  submitForm() {
    //when date is null api is showing type not supported
    if (this.createNewProject.get('projectStartDate')?.value == '') {
      this.createNewProject.removeControl('projectStartDate');
    }
    if (this.createNewProject.get('projectEndDate')?.value == '') {
      this.createNewProject.removeControl('projectEndDate');
    }
    this.apiService.createNewProject(this.createNewProject.value).subscribe(
      (data: any) => {
        //redirect to project page
        this.router.navigateByUrl('/project-board');
      },
      (err) => {
        alert(err);
        // adding removed control again if the forms throws error
        this.createNewProject.addControl(
          'projectEndDate',
          new FormControl('', null)
        );
        this.createNewProject.addControl(
          'projectStartDate',
          new FormControl('', null)
        );
      }
    );
  }
  resetForm() {
    this.createNewProject.reset();
  }
}
