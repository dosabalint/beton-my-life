import { Component } from '@angular/core';

import { SessionQuery } from '../../store/session.query';
import { SessionService } from '../../services/session.service';
import { Router } from '@angular/router';

class MenuItem {
  title: string;
  path: string;
}

@Component({
  selector: 'beton-my-life-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss'],
})
export class MenuComponent {
  items: MenuItem[] = [{ title: 'Home', path: '/home' }];

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
