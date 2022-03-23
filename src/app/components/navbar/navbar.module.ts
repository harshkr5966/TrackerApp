import { LoginPageComponent } from './../../modules/login-page/login-page.component';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';
import { MatInputModule } from '@angular/material/input';
import { MatSidenavModule } from '@angular/material/sidenav';
import { RouterModule } from '@angular/router';
import { HeaderComponent } from './../header/header.component';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './../../app-routing.module';
import { CommonModule } from '@angular/common';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClient, HttpClientModule } from '@angular/common/http';

import { NavbarComponent } from './navbar.component';
import { HeaderModule } from '../header/header.module';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';
import { TranslateLoader, TranslateModule } from '@ngx-translate/core';

export function HttpLoaderFactory(http: HttpClient) {
    return new TranslateHttpLoader(http);
  }

@NgModule({
    declarations: [ 
            NavbarComponent
    ],
    imports:[
        CommonModule,
        HttpClientModule,
        RouterModule,
        MatSidenavModule,
        MatInputModule,
        MatListModule,
        MatIconModule,
        MatToolbarModule,
        HeaderModule,
        TranslateModule.forRoot({
            loader: {
                provide: TranslateLoader,
                useFactory: HttpLoaderFactory,
                deps: [HttpClient]
            }
        })
        // SharedModule
    ],
    exports: [
        NavbarComponent
    ]
})
export class NavbarModule{}
