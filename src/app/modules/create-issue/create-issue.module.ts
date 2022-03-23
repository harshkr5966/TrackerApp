import { RouterModule } from '@angular/router';
import { MatDividerModule } from '@angular/material/divider';
import { CreateIssueComponent } from './create-issue.component';
import { MatSelectModule } from '@angular/material/select';
import { MatInputModule } from '@angular/material/input';
import { ButtonModule } from './../../components/button/button.module';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './../../app-routing.module';
import { CommonModule } from '@angular/common';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import {MatDatepickerModule} from '@angular/material/datepicker';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { DialogComponentComponent } from './dialog-component/dialog-component.component';
import { MatDialogModule } from '@angular/material/dialog';
import {  MatButtonModule } from '@angular/material/button';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';
import { TranslateLoader, TranslateModule } from '@ngx-translate/core';

export function HttpLoaderFactory(http: HttpClient) {
    return new TranslateHttpLoader(http);
  }

@NgModule({
    declarations: [ 
            CreateIssueComponent
    ],
    entryComponents: [DialogComponentComponent],
    imports:[
        CommonModule,
        HttpClientModule,
        ButtonModule,
        MatDatepickerModule,
        FormsModule,
        ReactiveFormsModule,
        MatInputModule,
        MatSelectModule,
        MatDividerModule,
        MatDialogModule,
        MatButtonModule,
        TranslateModule.forRoot({
            loader: {
                provide: TranslateLoader,
                useFactory: HttpLoaderFactory,
                deps: [HttpClient]
            }
        }),
        RouterModule.forChild([{ 
            path:'', component: CreateIssueComponent
        }])
    ],
    exports: [
        CreateIssueComponent
    ]
})
export class CreateIssueModule{}
