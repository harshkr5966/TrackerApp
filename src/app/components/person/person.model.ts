export class ProjectOwner {
  id!: string;
  name!: string;
  email!: string;
  teamName!: string;
  desination!: string;
}

export class Project {
  projectName!: string;
  projectID!: string;
  projectOwner!: ProjectOwner;
}
