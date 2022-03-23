import { AuthService } from 'src/app/guard/auth.service';
import { Component, Input } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {
  @Input() showSearchBar = true;

  // constructor() {}
  constructor(translate: TranslateService, public router: Router, private auth:AuthService) {
    translate.setDefaultLang('en');
    translate.use(localStorage.getItem("lang") || 'en');
  }

  doLogout(){
    this.auth.logOut();
  }
}
