import { Component, OnInit } from '@angular/core';
import { SessionService } from '../../services/session.service';
import { SessionQuery } from '../../store/session.query';
import { AuthService } from '../../services/auth.service';
import * as objectHash from 'object-hash';
import { Router } from '@angular/router';

@Component({
  selector: 'beton-my-life-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {
  email: any = 'dosa.balint@gmail.com';
  password: any = 'kismacska';

  constructor(
    public sessionQuery: SessionQuery,
    public sessionService: SessionService,
    public authService: AuthService,
    public router: Router
  ) {}

  ngOnInit(): void {
    this.sessionQuery.isLoggedIn$.subscribe((isLoggedIn) => {
      if (isLoggedIn) {
        this.router.navigate(['home']);
      }
    });
  }

  tryLogin() {
    const token = objectHash(this.email + ':' + this.password);

    this.authService.validateToken(token).subscribe(() => {
      this.sessionService.updateUserToken(token);
    });
  }
}
