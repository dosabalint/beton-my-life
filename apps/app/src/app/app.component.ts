import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Router } from '@angular/router';
import { SessionService } from './services/session.service';

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
    private sessionService: SessionService
  ) {
    this.loading = true;
  }

  ngOnInit() {
    if (this.sessionService.hasLocalStorageToken()) {
      this.sessionService.loadProfile();
    }
  }
}
