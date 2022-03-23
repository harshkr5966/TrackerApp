import { Issue, Project } from "./modules/dashboard/dashboard.model";


export interface AppState {
//   readonly issueState : {issueList : Issue[]};
  readonly issueList : Issue[];
  readonly projectList : Project[];
}