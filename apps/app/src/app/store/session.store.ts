import { Store, StoreConfig } from '@datorama/akita';
import { Injectable } from '@angular/core';

export interface SessionState {
  token: string;
  firstName: string;
  lastName: string;
  email: string;
  id: string;
}

export function createInitialState(): SessionState {
  return {
    id: '',
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
