import { Store, StoreConfig } from '@datorama/akita';
import { Injectable } from '@angular/core';

export interface SessionState {
  token: string;
  firstName: string;
  lastName: string;
  email: string;
}

export function createInitialState(): SessionState {
  return {
    token: localStorage.getItem('token'),
    firstName: '',
    lastName: '',
    email: '',
  };
}

@Injectable({ providedIn: 'root' })
@StoreConfig({ name: 'session' })
export class SessionStore extends Store<SessionState> {
  constructor() {
    super(createInitialState());
  }
}
