export class User {
  id!: string;
  name!: string;
  email!: string;
  teamName!: string;
  desination!: string;
}

export class Project {
  projectName!: string;
  projectID!: string;
  projectOwner!: User;
  projectStartDate!: Date;
  projectEndDate!: Date;
}

export class Issue {
  id!: string;
  summary!: string;
  type!: number;
  projectID!: string;
  description!: string;
  priority!: number;
  assignee!: User;
  tags!: string[];
  sprint!: string;
  storyPoint!: number;
  status!: number;
  createdBy!: User;
  createdOn!: Date;
  updatedBy!: User;
  updatedOn!: Date;
}

export interface dropdownOptions {
  key: string | number;
  value: string | number;
}

export interface initalState{
  issueList : Issue[];
}