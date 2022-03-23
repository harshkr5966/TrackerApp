import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { TranslateService } from '@ngx-translate/core';
import { TAB_MAPPER } from './navbar.constants';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit{
  tabs = TAB_MAPPER;

  lang: string = "en";

  // constructor(public router: Router) {}
  constructor(translate: TranslateService, public router: Router) {
    translate.setDefaultLang('en');
    translate.use(localStorage.getItem("lang") || 'en');
  }
  ngOnInit(): void {
    this.lang = localStorage.getItem("lang") || "en";
  }

  changeLang(event: any){
    localStorage.setItem("lang", event.target.value);
    window.location.reload();
  }

}
