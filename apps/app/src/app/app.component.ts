import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Router } from '@angular/router';
import { SessionService } from './store/session.service';
import { SessionQuery } from './store/session.query';

@Component({
  selector: 'beton-my-life-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  loading: boolean;

  constructor(
    private http: HttpClient,
    private router: Router,
    private sessionService: SessionService,
    private sessionQuery: SessionQuery
  ) {
    this.loading = true;
  }

  ngOnInit() {
    this.sessionQuery.isLoggedIn$.subscribe((isLoggedIn) => {
      if (isLoggedIn) {
        this.sessionService.loadProfile();
      } else {
        this.sessionService.removeProfile();
      }
    });
  }
}
