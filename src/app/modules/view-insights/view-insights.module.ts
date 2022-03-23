import { MatDividerModule } from '@angular/material/divider';
import { TeammatesModule } from './../teammates/teammates.module';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './../../app-routing.module';
import { CommonModule } from '@angular/common';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClient, HttpClientModule } from '@angular/common/http';

import { ViewInsightsComponent } from './view-insights.component';
import { RouterModule } from '@angular/router';
import { TranslateLoader, TranslateModule } from '@ngx-translate/core';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';

export function HttpLoaderFactory(http: HttpClient) {
    return new TranslateHttpLoader(http);
  }


@NgModule({
    declarations: [ 
            ViewInsightsComponent
    ],
    imports:[
        CommonModule,
        HttpClientModule,
        MatDividerModule,
        TeammatesModule,
        RouterModule.forChild([{ 
            path:'', component: ViewInsightsComponent
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
        ViewInsightsComponent

    ]
})
export class ViewInsgihtsModule{}
