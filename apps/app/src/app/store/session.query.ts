import { SessionState, SessionStore } from './session.store';
import { Query } from '@datorama/akita';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class SessionQuery extends Query<SessionState> {
  token$: Observable<string> = this.select(({ token }) => token);
  isLoggedIn$: Observable<boolean> = this.select(({ token }) => !!token);

  constructor(protected store: SessionStore) {
    super(store);
  }
}