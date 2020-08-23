import { Injectable } from '@nestjs/common';
import { Observable } from 'rxjs';

import { ChallengesRepository } from '../repositories/challenges.repository';
import { Challenge } from '../models/challenge';

@Injectable()
export class ChallengesService {
  constructor(private challengesRepository: ChallengesRepository) {}

  list(): Observable<Challenge[]> {
    return this.challengesRepository.list();
  }

  seed(): Observable<Challenge> {
    return this.challengesRepository.create(this.challengesRepository.mock());
  }
}
