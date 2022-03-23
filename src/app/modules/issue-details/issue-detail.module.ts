import { TranslateHttpLoader } from '@ngx-translate/http-loader';
import { ButtonModule } from './../../components/button/button.module';
import { MatIconModule } from '@angular/material/icon';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './../../app-routing.module';
import { CommonModule } from '@angular/common';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClient, HttpClientModule } from '@angular/common/http';

import { IssueDetailsComponent } from './issue-details.component';
import {MatSelectModule} from '@angular/material/select';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
// import { ButtonComponent } from 'src/app/components/button/button.component';
import {MatDividerModule} from '@angular/material/divider';
import { RouterModule } from '@angular/router';
import { TranslateLoader, TranslateModule } from '@ngx-translate/core';
export function HttpLoaderFactory(http: HttpClient) {
    return new TranslateHttpLoader(http);
  }

@NgModule({
    declarations: [ 
            IssueDetailsComponent

    ],
    imports:[
        CommonModule,
        HttpClientModule,
        MatSelectModule,
        FormsModule,
        ReactiveFormsModule,
        MatDividerModule,
        MatIconModule,
        ButtonModule,
        RouterModule.forChild([{ 
            path:'', component: IssueDetailsComponent
        }]),
        TranslateModule.forRoot({
            loader: {
                provide: TranslateLoader,
                useFactory: HttpLoaderFactory,
                deps: [HttpClient]
            }
        })
    ],  
    exports: [
        IssueDetailsComponent
    ]
})
export class IssueDetailsModule{}
