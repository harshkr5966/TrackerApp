import { PersonComponent } from './person.component';
import { MatButtonModule } from '@angular/material/button';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './../../app-routing.module';
import { CommonModule } from '@angular/common';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';


@NgModule({
    declarations: [ 
            PersonComponent
    ],
    imports:[
        CommonModule,
        HttpClientModule,
        MatButtonModule
    ],
    exports: [
        PersonComponent
    ]
})
export class PersonModule{}
