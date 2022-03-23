import { Component, HostBinding, OnInit  } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ApiService } from 'src/app/api.service';
import {
  trigger,
  state,
  style,
  animate,
  transition,
  // ...
} from '@angular/animations';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-view-insights',
  templateUrl: './view-insights.component.html',
  styleUrls: ['./view-insights.component.scss'],
  animations:[
    trigger('divstate',[
      state('in',style({
        opacity:1,
        transform: 'translateY(0px)'
      })),
      transition('void => *', [
        style({
          opacity:0,
          transform: 'translateY(20px)'
        }),
        animate(500)
      ] )
    ]),
    trigger('prog',[
      state('in',style({
        opacity:1,
        transform: 'translateX(0px)'
      })),
      transition('void => *', [
        style({
          opacity:0,
          transform: 'translateX(-100px)'
        }),
        animate(400)
      ] )
    ])

  ]
})
export class ViewInsightsComponent implements OnInit {
  state = 'initial';

  // constructor(
  //   private apiService: ApiService,
  //   private activatedRoute: ActivatedRoute
  // ) {}

  constructor(translate: TranslateService, public router: Router,private apiService: ApiService,
    private activatedRoute: ActivatedRoute) {
    translate.setDefaultLang('en');
    translate.use(localStorage.getItem("lang") || 'en');
  }

  componentName!: string;
  selectedProjectID!: string;
  total!: number;
  percentage = [0.25, 0.25, 0.25, 0.25];
  insights = [
    { name: 'TO DO', class: 'todo', status: 0 },
    { name: 'DEVELOPMENT', class: 'development', status: 0 },
    { name: 'TESTING', class: 'testing', status: 0 },
    { name: 'COMPLETED', class: 'completed', status: 0 }
  ];

  ngOnInit(): void {
    this.selectedProjectID = this.activatedRoute.snapshot.params['id'];
    this.total = 0;
    this.apiService
      .getIsuueByProjectID(this.selectedProjectID)
      .subscribe((resp) => {
        for (let i of resp) {
          this.insights[parseInt(i.status) - 1].status += 1;
          this.total += 1;
        }
        for (let i = 0; i < this.insights.length; ++i) {
          this.percentage[i] = this.insights[i].status / this.total;
        }
      });
  }
}
