import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NavbarComponent } from './components/navbar/navbar.component';
import { AuthGuard } from './guard/auth.guard';
import { CreateIssueComponent } from './modules/create-issue/create-issue.component';
import { CreateProjectComponent } from './modules/create-project/create-project.component';
import { DashboardComponent } from './modules/dashboard/dashboard.component';
import { IssueDetailsComponent } from './modules/issue-details/issue-details.component';
import { LoginPageComponent } from './modules/login-page/login-page.component';
import { ViewInsightsComponent } from './modules/view-insights/view-insights.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'login-page',
    pathMatch: 'full'
  },
  {
    path: 'login-page',
    component: LoginPageComponent
  },
  {
    path: '',
    canActivate: [AuthGuard],
    component: NavbarComponent,
    children: [
      {
        path: 'project-board',
        component: DashboardComponent
      },
      {
        // path: 'create-issue',
        // component: CreateIssueComponent

        path: 'create-issue',
        loadChildren: ()=> import('./modules/create-issue/create-issue.module').then((module)=>module.CreateIssueModule)
      },
      {
        // path: 'create-project',
        // component: CreateProjectComponent

        path: 'create-project',
        loadChildren: ()=> import('./modules/create-project/create-project.module').then((module)=>module.CreateProjectModule)
      },
      {
        // path: 'view-insights/:id',
        // component: ViewInsightsComponent

        path: 'view-insights/:id',
        loadChildren: ()=> import('./modules/view-insights/view-insights.module').then((module)=>module.ViewInsgihtsModule)
      },
      {
        // path: 'issue-details/:id',
        // component: IssueDetailsComponent

        path: 'issue-details/:id',
        loadChildren: ()=> import('./modules/issue-details/issue-detail.module').then((module)=>module.IssueDetailsModule)
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
