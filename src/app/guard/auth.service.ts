import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { ApiService } from '../api.service';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  constructor(private apiService: ApiService, private router: Router) {}

  setUser(id: string): void {
    localStorage.setItem('id', id);
  }

  getUser(): string | null {
    return localStorage.getItem('id');
  }

  isLoggedIn() {
    return this.getUser() !== null;
  }

  logOut() {
    localStorage.removeItem('id');
    this.router.navigateByUrl('/login-page');
  }

  loginUser(credentials: any) {
    this.apiService.login(credentials).subscribe((response) => {
      if (response.message == 'User signed in!') {
        this.setUser(response.userId);
        this.router.navigateByUrl('/project-board');
      }
      return new Error('failed to login');
    });
  }
}
