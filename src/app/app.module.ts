import { RouterModule } from '@angular/router';
import { LoginPageModule } from './modules/login-page/login-page.module';
import { CardModule } from './components/card/card.module';
import { NavbarModule } from './components/navbar/navbar.module';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ActionReducer, ActionReducerMap, StoreModule } from '@ngrx/store';

import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatListModule } from '@angular/material/list';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatFormFieldModule } from '@angular/material/form-field';


import { AppComponent } from './app.component';
import { MatDialogModule } from '@angular/material/dialog';

import { ViewInsgihtsModule } from './modules/view-insights/view-insights.module';
import { DashboardModule } from './modules/dashboard/dashboard.module';
import { CreateProjectModule } from './modules/create-project/create-project.module';
import { CreateIssueModule } from './modules/create-issue/create-issue.module';
import { IssueDetailsModule } from './modules/issue-details/issue-detail.module';

import { TranslateLoader, TranslateModule } from '@ngx-translate/core';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';
import { IssueReducer } from 'src/reducers/issue.reducer';
import { LoginPageComponent } from './modules/login-page/login-page.component';
import { ReactiveFormsModule } from '@angular/forms';
import { MatNativeDateModule } from '@angular/material/core';
import { DialogComponentComponent } from './modules/create-issue/dialog-component/dialog-component.component';
import { HeaderModule } from './components/header/header.module';
import { PersonModule } from './components/person/person.module';
export function HttpLoaderFactory(http: HttpClient) {
  return new TranslateHttpLoader(http);
}

@NgModule({
  declarations: [
    AppComponent,
    // PersonComponent
    // LoginPageComponent
    // NavbarComponent,
    // DashboardComponent,
    // CreateProjectComponent,
    // CreateIssueComponent,
    // HeaderComponent
    // ButtonComponent,
    // CardComponent,
    // ViewInsightsComponent,
    // TeammatesComponent,
    // IssueDetailsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HttpClientModule,
    StoreModule.forRoot({issueList : IssueReducer} as ActionReducerMap<any, any>),

    MatSidenavModule,
    MatListModule,
    MatToolbarModule,
    MatFormFieldModule,
    MatInputModule,
    MatIconModule,
    MatNativeDateModule,
    ReactiveFormsModule,
    MatDialogModule,
    RouterModule,
    
    ViewInsgihtsModule,
    IssueDetailsModule,
    DashboardModule,
    // CreateProjectModule,
    // CreateIssueModule,
    NavbarModule,
    CardModule,
    LoginPageModule,  
    HeaderModule,
    PersonModule,

    TranslateModule.forRoot({
      loader: {
          provide: TranslateLoader,
          useFactory: HttpLoaderFactory,
          deps: [HttpClient]
      }
  })

    // FormsModule,
    // ReactiveFormsModule,
    // MatNativeDateModule,
    // MatSelectModule,
    // MatCardModule,
    // MatDatepickerModule,
    // MatNativeDateModule,
    // MatDividerModule,
    // MatButtonModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
