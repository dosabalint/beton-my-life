import { Component } from '@angular/core';

import { SessionQuery } from '../../store/session.query';
import { SessionService } from '../../store/session.service';
import { Router } from '@angular/router';

@Component({
  selector: 'beton-my-life-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss'],
})
export class MenuComponent {
  secureItems = [
    {
      label: 'Home',
      routerLink: 'home',
    },
    {
      label: 'Profile',
      routerLink: 'profile',
    },
    {
      label: 'Challenges',
      routerLink: 'challenges',
    },
  ];

  constructor(
    public sessionQuery: SessionQuery,
    public sessionService: SessionService,
    public router: Router
  ) {}

  logout() {
    this.sessionService.removeUserToken();
    this.router.navigate(['login']);
  }
}
