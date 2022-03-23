import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { TranslateService } from '@ngx-translate/core';
import { ApiService } from 'src/app/api.service';
import { user } from 'src/app/models/user.model';

@Component({
  selector: 'app-teammates',
  templateUrl: './teammates.component.html',
  styleUrls: ['./teammates.component.scss']
})
export class TeammatesComponent implements OnInit {
  @Input() projectID!: string;
  projectOwner!: user;
  teamMembers!: user[];
  // constructor() {}
  constructor(translate: TranslateService, public router: Router, private apiService: ApiService) {
    translate.setDefaultLang('en');
    translate.use(localStorage.getItem("lang") || 'en');
  }

  ngOnInit(): void {
    this.apiService.getProjects().subscribe((resp) => {
      for (let i of resp) {
        if (i.projectID === this.projectID) {
          this.projectOwner = i.projectOwner;
          break;
        }
      }

      this.apiService
        .getTeammembersByTeamName(this.projectOwner.teamName)
        .subscribe((resp) => {
          this.teamMembers = resp;
        });
    });
  }
}
