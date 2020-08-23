import { HttpService, Injectable } from '@nestjs/common';
import * as Chance from 'chance';
import { Observable } from 'rxjs';

import { Challenge } from '../models/challenge';
import { ChallengeCreateDto } from '../models/challenge-create.dto';
import { EnvironmentService } from '../../environment/services/environment.service';
import { Dictionary } from '../../../types/dictionary';
import { map } from 'rxjs/operators';

const chance = Chance();

@Injectable()
export class ChallengesRepository {
  constructor(
    private environmentService: EnvironmentService,
    private httpService: HttpService
  ) {}

  list(): Observable<Challenge[]> {
    return this.httpService
      .get<Dictionary<Challenge>>(this.environmentService.getChallengeDbUrl())
      .pipe(
        map(({ data }) => data ?? {}),
        map((dictionary) => Object.values(dictionary)),
        map((list) => list.filter((item) => !item.isDeleted))
      );
  }

  listByUserId(userId: string): Observable<Challenge[]> {
    return this.httpService
      .get<Dictionary<Challenge>>(this.environmentService.getChallengeDbUrl(), {
        params: {
          orderBy: '"author"',
          equalTo: `"${userId}"`,
        },
      })
      .pipe(
        map(({ data }) => data ?? {}),
        map((dictionary) => Object.values(dictionary)),
        map((list) => list.filter((item) => !item.isDeleted))
      );
  }

  create(challengeCreateDto: ChallengeCreateDto): Observable<Challenge> {
    const id = chance.guid();
    const challenge: Challenge = {
      isDeleted: false,
      id,
      ...challengeCreateDto,
    };

    return this.httpService
      .put<Challenge>(this.environmentService.getChallengeDbUrl(id), challenge)
      .pipe(map(({ data }) => data));
  }

  mock(): Challenge {
    const isActive = Math.random() > 0.5;

    return {
      author: chance.guid(),
      description: chance.paragraph(),
      id: chance.guid(),
      isActive,
      endDate: isActive ? new Date(chance.timestamp()).toISOString() : '',
      outcome: Math.random() > 0.5,
      isDeleted: false,
      proofUrl: chance.url(),
      title: chance.word({ length: 10 }),
    };
  }
}
