import { Project } from './../app/modules/dashboard/dashboard.model';
//=================================================================== Section 1

import { Injectable } from '@angular/core'
import { Action } from '@ngrx/store'


// =================================================================== Section 2
export const ADD_PROJECT = 'ADD_PROJECT'
export const ADD_PROJECTS = 'ADD_PROJECTS'


// =================================================================== Section 3
export class AddProject implements Action {
    readonly type = ADD_PROJECT

    constructor(public payload: Project) {}
}
export class AddProjects implements Action {
    readonly type = ADD_PROJECTS

    constructor(public payload: Project[]) {}
}


// Section 4
export type Actions = AddProject | AddProjects
