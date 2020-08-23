import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { EnvironmentService } from './environment.service';
import { Observable } from 'rxjs';
import { ChallengeDto } from '../models/challenge.dto';

@Injectable({
  providedIn: 'root',
})
export class ChallengesService {
  constructor(
    private httpClient: HttpClient,
    private environmentService: EnvironmentService
  ) {}

  list(): Observable<ChallengeDto[]> {
    return this.httpClient.get<ChallengeDto[]>(
      this.environmentService.backendUrl('/challenges')
    );
  }

  listByUserId(userId): Observable<ChallengeDto[]> {
    return this.httpClient.get<ChallengeDto[]>(
      this.environmentService.backendUrl(`/challenges/${userId}`)
    );
  }
}
