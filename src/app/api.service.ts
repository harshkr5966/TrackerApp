import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { issue } from './models/issue.model';
import { project } from './models/project.model';
import { user } from './models/user.model';
// eslint-disable-next-line sort-imports
import { Issue, Project, User } from './modules/dashboard/dashboard.model';

@Injectable({ providedIn: 'root' })
export class ApiService {
  header = new HttpHeaders({ userID: '1' });

  constructor(private http: HttpClient) {}

  login(data: any): Observable<any> {
    return this.http.post(environment.API_URL + 'auth/login', data);
  }

  getUsers(): Observable<User[]> {
    return this.http.get<User[]>(environment.API_URL + 'user', {
      headers: this.header
    });
  }

  createNewIssue(formResponse: any) {
    return this.http.post(environment.API_URL + 'issue', formResponse, {
      headers: this.header
    });
  }

  getAllProjects() {
    return this.http.get<Project[]>(environment.API_URL + 'project', {
      headers: this.header
    });
  }

  createNewProject(formResponse: any) {
    return this.http.post(environment.API_URL + 'project', formResponse, {
      headers: this.header
    });
  }

  getIssuesOfProject(projectId: string) {
    return this.http.get<Issue[]>(
      environment.API_URL + `issue?projectID=${projectId}`,
      {
        headers: this.header
      }
    );
  }

  getIsuueByProjectID(id: string): Observable<issue[]> {
    return this.http.get<any>(environment.API_URL + 'issue?projectID=' + id, {
      headers: this.header
    });
  }

  getProjects(): Observable<project[]> {
    return this.http.get<project[]>(environment.API_URL + 'project', {
      headers: this.header
    });
  }

  getTeammembersByTeamName(teamName: string): Observable<user[]> {
    return this.http.get<user[]>(
      environment.API_URL + 'user?teamName=' + teamName,
      {
        headers: this.header
      }
    );
  }

  updateIsuueStatus(id: string, status: string) {
    const headers = { 'content-type': 'application/json', userid: 'A02' };
    const body = { status: status };
    return this.http.put(environment.API_URL + 'issue/' + id, body, {
      headers: this.header
    });
  }

  fetchIssueById(id: string): Observable<issue> {
    return this.http.get<any>(environment.API_URL + 'issue/' + id, {
      headers: this.header
    });
  }

  getCommentsByIssueIdAndProjectId(issueId: string, projectId: string) {
    return this.http.get<any>(
      environment.API_URL +
        'comment?projectID=' +
        projectId +
        '&issueID=' +
        issueId,
      {
        headers: this.header
      }
    );
  }

  postCommentByIssueIdAndProjectId(
    issueId: string,
    projectId: string,
    comment: string
  ) {
    return this.http.post<any>(
      environment.API_URL +
        'comment?projectID=' +
        projectId +
        '&issueID=' +
        issueId,
      { comment: comment },
      { headers: this.header }
    );
  }

  updateIsuueAssignee(id: string, assigneeID: string) {
    const body = { assigneeID: assigneeID };
    return this.http.put(environment.API_URL + 'issue/' + id, body, {
      headers: this.header
    });
  }
}
