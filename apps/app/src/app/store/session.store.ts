import { Store, StoreConfig } from '@datorama/akita';
import { Injectable } from '@angular/core';

export interface SessionState {
  token: string;
  name: string;
  email: string;
}

export function createInitialState(): SessionState {
  return {
    token: localStorage.getItem('token'),
    name: '',
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
