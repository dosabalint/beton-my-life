import { Component, OnInit } from '@angular/core';
import * as objectHash from 'object-hash';
import { HttpErrorResponse } from '@angular/common/http';
import { Router } from '@angular/router';
import { MessageService } from 'primeng/api';

import { SessionQuery } from '../../store/session.query';
import { SessionService } from '../../store/session.service';
import { AuthService } from '../../services/auth.service';
import { UserCreateDto } from '../../models/user-create.dto';

@Component({
  selector: 'beton-my-life-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss'],
})
export class RegisterComponent implements OnInit {
  firstName = 'Bálint';
  lastName = 'Dósa';
  email = 'dosa.balint@gmail.com';
  password = 'kismacska';

  constructor(
    public sessionQuery: SessionQuery,
    public sessionService: SessionService,
    public authService: AuthService,
    public router: Router,
    public messageService: MessageService
  ) {}

  ngOnInit(): void {}

  register() {
    const token = objectHash(this.email + ':' + this.password);
    const userCreateDto: UserCreateDto = {
      email: this.email,
      firstName: this.firstName,
      lastName: this.lastName,
      token,
    };

    this.authService.register(userCreateDto).subscribe(
      () => {
        this.messageService.add({
          severity: 'success',
          summary: 'Auth Message',
          detail: 'Successful registration.',
        });
        console.log({ token });
        this.sessionService.updateUserToken(token);
        this.router.navigate(['profile']);
      },
      (error: HttpErrorResponse) => {
        // if (error.status === 403) {
        this.messageService.add({
          severity: 'error',
          summary: 'Auth Message',
          detail: error.status.toString(),
        });
        // }
      }
    );
  }

  isValid() {
    return this.firstName && this.lastName && this.email && this.password;
  }
}
