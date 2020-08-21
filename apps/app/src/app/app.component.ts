import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { NavigationStart, Router } from '@angular/router';
import { SessionService } from './services/session.service';

@Component({
  selector: 'beton-my-life-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  loading: boolean;

  constructor(
    private http: HttpClient,
    private router: Router,
    private sessionService: SessionService
  ) {
    this.loading = true;

    this.router.events.subscribe((event: any) => {
      if (event instanceof NavigationStart) {
        this.sessionService.init();
      }
    });
  }
}
