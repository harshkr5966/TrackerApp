import { RouterModule } from '@angular/router';
import { MatButtonModule } from '@angular/material/button';
import { ButtonComponent } from './button.component';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './../../app-routing.module';
import { CommonModule } from '@angular/common';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';


@NgModule({
    declarations: [ 
            ButtonComponent
    ],
    imports:[
        CommonModule,
        HttpClientModule,
        MatButtonModule,
        MatFormFieldModule,
        MatInputModule,
        RouterModule
    ],
    exports: [
        ButtonComponent
    ]
})
export class ButtonModule{}
