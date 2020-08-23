import { Injectable } from '@nestjs/common';
import { Observable } from 'rxjs';

import { ChallengesRepository } from '../repositories/challenges.repository';
import { Challenge } from '../models/challenge';
import { ChallengeCreateDto } from '../models/challenge-create.dto';

@Injectable()
export class ChallengesService {
  constructor(private challengesRepository: ChallengesRepository) {}

  list(): Observable<Challenge[]> {
    return this.challengesRepository.list();
  }

  listByUserId(userId: string): Observable<Challenge[]> {
    return this.challengesRepository.listByUserId(userId);
  }

  create(createChallengeDto: ChallengeCreateDto): Observable<Challenge> {
    return this.challengesRepository.create(createChallengeDto);
  }

  seed(): Observable<Challenge> {
    return this.challengesRepository.create(this.challengesRepository.mock());
  }
}
