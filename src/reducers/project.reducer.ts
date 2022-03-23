import { Project } from './../app/modules/dashboard/dashboard.model';
import { Action } from '@ngrx/store'
import * as ProjectActions from '../actions/project.actions'


const initialPState : Project[] = [];

// Section 2
export function ProjectReducer(
    state:  Project[] = initialPState, 
    action: ProjectActions.Actions
) { 
    console.log(state);

    // Section 3 
    switch(action.type) {
        case ProjectActions.ADD_PROJECT:
            return {
                ...state,
                issueList: [...state, action.payload]  
             };
        case ProjectActions.ADD_PROJECTS:
            return [...state, ...action.payload];
        default:
            return state;
    }
}