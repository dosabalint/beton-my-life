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

  validateToken(token: string): Observable<Object> {
    return this.httpClient.get(
      `${this.environmentService.backendUrl()}/auth/validate-token`,
      { headers: { Authorization: 'Bearer ' + token } }
    );
  }
}
