import { user } from './user.model';

export class project {
  projectID!: string;
  projectName!: string;
  projectStartDate!: string;
  projectEndDate!: string;
  projectOwner!: user;
}
