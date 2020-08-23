import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { EnvironmentService } from './environment.service';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  constructor(
    private httpClient: HttpClient,
    private environmentService: EnvironmentService
  ) {}

  validateToken(token: string): Observable<void> {
    return this.httpClient.get<void>(
      `${this.environmentService.backendUrl()}/auth/validate-token`,
      { headers: { Authorization: 'Bearer ' + token } }
    );
  }

  getProfile(): Observable<ProfileDto> {
    return this.httpClient.get<ProfileDto>(
      `${this.environmentService.backendUrl()}/users/me`,
      {
        headers: { Authorization: localStorage.getItem('token') || '' },
      }
    );
  }
}

interface ProfileDto {
  name: string;
  email: string;
}
