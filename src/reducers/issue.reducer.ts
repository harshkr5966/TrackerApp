import { Issue } from './../app/modules/dashboard/dashboard.model';
import { Action } from '@ngrx/store'
import * as IssueActions from '../actions/issue.actions'

// Section 1
// const initialState : {issueList : Issue[]} = {
//     issueList : []
// };

const initialState : Issue[] = [];

// Section 2
export function IssueReducer(
    state:  Issue[] = initialState, 
    action: IssueActions.Actions
) { 
    console.log(state);

    // Section 3 
    switch(action.type) {
        case IssueActions.ADD_ISSUE:
            return {
                ...state,
                issueList: [...state, action.payload]  
             };
        case IssueActions.ADD_ISSUES:
            return [...state, ...action.payload];
        default:
            return state;
    }
}