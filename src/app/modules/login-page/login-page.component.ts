import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { TranslateService } from '@ngx-translate/core';
import { ApiService } from 'src/app/api.service';
import { AuthService } from 'src/app/guard/auth.service';

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.scss']
})
export class LoginPageComponent implements OnInit {
  // constructor(private loginService: AuthService, private router: Router) {}

  ngOnInit(): void {
    if (this.loginService.isLoggedIn()) {
      this.router.navigateByUrl('/project-board');
    }

    this.lang = localStorage.getItem("lang") || "en";
  }

  loginForm = new FormGroup({
    email: new FormControl('', [Validators.required]),
    password: new FormControl('', [Validators.required])
  });

  loginProcess() {
    if (this.loginForm.valid) {
      this.loginService.loginUser(this.loginForm.value);
    }
  }

  lang: string = "en";

  // constructor(public router: Router) {}
  constructor(translate: TranslateService,private loginService: AuthService, public router: Router) {
    translate.setDefaultLang('en');
    translate.use(localStorage.getItem("lang") || 'en');
  }

  changeLang(event: any){
    localStorage.setItem("lang", event.target.value);
    window.location.reload();
  }

}
