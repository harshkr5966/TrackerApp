import { RouterModule } from '@angular/router';
import { MatCardModule } from '@angular/material/card';
import { ButtonModule } from './../button/button.module';
import { CardComponent } from './card.component';
import { MatButtonModule } from '@angular/material/button';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './../../app-routing.module';
import { CommonModule } from '@angular/common';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';


@NgModule({
    declarations: [ 
            CardComponent
    ],
    imports:[
        CommonModule,
        HttpClientModule,
        MatButtonModule,
        ButtonModule,
        MatCardModule,
        MatFormFieldModule,
        MatInputModule,
        RouterModule
    ],
    exports: [
        CardComponent
    ]
})
export class CardModule{}
