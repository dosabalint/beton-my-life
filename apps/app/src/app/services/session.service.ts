import { Injectable } from '@angular/core';
import { SessionStore } from '../store/session.store';
import { SessionQuery } from '../store/session.query';

@Injectable({
  providedIn: 'root',
})
export class SessionService {
  constructor(
    private sessionStore: SessionStore,
    private sessionQuery: SessionQuery
  ) {}

  updateUserToken(token: string) {
    this.sessionStore.update({ token });
    localStorage.setItem('token', token);
  }

  init() {
    this.sessionQuery.token$.subscribe((token) => console.log({ token }));
  }

  removeUserToken() {
    this.sessionStore.update({ token: '' });
    localStorage.removeItem('token');
  }
}
