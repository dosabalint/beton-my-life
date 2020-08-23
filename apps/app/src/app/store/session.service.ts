import { Injectable } from '@angular/core';
import { SessionStore } from './session.store';
import { SessionQuery } from './session.query';
import { AuthService } from '../services/auth.service';
import { HttpErrorResponse } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class SessionService {
  constructor(
    private sessionStore: SessionStore,
    private sessionQuery: SessionQuery,
    private authService: AuthService
  ) {}

  updateUserToken(token: string) {
    localStorage.setItem('token', token);
    this.sessionStore.update({ token });
  }

  removeUserToken() {
    localStorage.removeItem('token');
    this.sessionStore.update({ token: '' });
  }

  loadProfile() {
    this.authService.getProfile().subscribe(
      (profileData) => this.sessionStore.update(profileData),

      (error: HttpErrorResponse) => {
        if (error.status === 403) {
          if (this.sessionQuery.getValue().token) {
            this.removeUserToken();
          }
        } else {
          throw error;
        }
      }
    );
  }

  removeProfile() {
    this.sessionStore.update({
      email: '',
      firstName: '',
      lastName: '',
      id: '',
    });
  }
}
