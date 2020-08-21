import { Injectable } from '@angular/core';
import { SessionStore } from '../store/session.store';
import { SessionQuery } from '../store/session.query';
import { AuthService } from './auth.service';

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
    this.sessionStore.update({ token });
    localStorage.setItem('token', token);
  }

  removeUserToken() {
    this.sessionStore.update({ token: '' });
    localStorage.removeItem('token');
  }

  loadProfile() {
    this.authService.getProfile().subscribe((profileData) => {
      this.sessionStore.update(profileData);
    });
  }
}
