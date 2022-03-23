//=================================================================== Section 1
import { Issue } from './../app/modules/dashboard/dashboard.model';
import { Injectable } from '@angular/core'
import { Action } from '@ngrx/store'


// =================================================================== Section 2
export const ADD_ISSUE = 'ADD_ISSUE'
export const ADD_ISSUES = 'ADD_ISSUES'


// =================================================================== Section 3
export class AddIssue implements Action {
    readonly type = ADD_ISSUE

    constructor(public payload: Issue) {}
}
export class AddIssues implements Action {
    readonly type = ADD_ISSUES

    constructor(public payload: Issue[]) {}
}


// Section 4
export type Actions = AddIssue | AddIssues
