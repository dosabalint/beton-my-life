import { HttpService, Injectable } from '@nestjs/common';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import * as Chance from 'chance';
import * as objectHash from 'object-hash';

import { EnvironmentService } from '../../environment/services/environment.service';
import { UserDto } from '../models/user.dto';
import { DbCreateMessage } from '../../../types/db-create-message';
import { User } from '../models/user';
import { UserCreateDto } from '../models/user-create.dto';

const chance = Chance();

@Injectable()
export class UsersRepository {
  constructor(
    private environmentService: EnvironmentService,
    private httpService: HttpService
  ) {}

  list(): Observable<UserDto[]> {
    return this.httpService
      .get<UserDto[]>(this.environmentService.getUserDbUrl())
      .pipe(map(({ data }) => data));
  }

  create(user: UserCreateDto): Observable<DbCreateMessage> {
    const id = chance.guid();

    return this.httpService
      .put(this.environmentService.getUserDbUrl(id), { id, ...user })
      .pipe(map(({ data }) => data));
  }

  getByToken(token: string): Observable<UserDto[]> {
    return this.httpService
      .get(this.environmentService.getUserDbUrl(), {
        params: {
          orderBy: '"token"',
          equalTo: `"${token}"`,
        },
      })
      .pipe(map(({ data }) => data));
  }

  getFirstByToken(token: string) {
    return this.getByToken(token).pipe(map((list) => Object.values(list)[0]));
  }

  mock(): User {
    const data = {
      id: chance.guid(),
      firstName: chance.first(),
      lastName: chance.last(),
      email: chance.email(),
      pass: chance.word(),
    };

    return {
      ...data,
      token: objectHash(data.email + ':' + data.pass),
    };
  }
}
