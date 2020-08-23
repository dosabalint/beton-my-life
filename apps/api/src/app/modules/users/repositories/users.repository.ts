import { HttpService, Injectable } from '@nestjs/common';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import * as Chance from 'chance';
import * as objectHash from 'object-hash';

import { EnvironmentService } from '../../environment/services/environment.service';
import { UserDto } from '../models/user.dto';
import { extractResponseData } from '../../../helpers/operators/extractResponseData';
import { DbCreateMessage } from '../../../types/db-create-message';
import { User } from '../models/user';

const chance = Chance();

@Injectable()
export class UsersRepository {
  constructor(
    private environmentService: EnvironmentService,
    private httpService: HttpService
  ) {}

  get dbUrl() {
    return this.environmentService.getUserDbUrl();
  }

  list(): Observable<UserDto[]> {
    return this.httpService
      .get<UserDto[]>(this.dbUrl)
      .pipe(extractResponseData());
  }

  create(user: UserDto): Observable<DbCreateMessage> {
    return this.httpService.post(this.dbUrl, user).pipe(extractResponseData());
  }

  getByToken(token: string): Observable<UserDto[]> {
    return this.httpService
      .get(this.dbUrl, {
        params: {
          orderBy: '"token"',
          equalTo: `"${token}"`,
        },
      })
      .pipe(extractResponseData());
  }

  getFirstByToken(token: string) {
    return this.getByToken(token).pipe(map((list) => Object.values(list)[0]));
  }

  mock(): User {
    const data = {
      id: chance.guid(),
      name: chance.name(),
      email: chance.email(),
      pass: chance.word(),
    };

    return {
      ...data,
      token: objectHash(data.email + ':' + data.pass),
    };
  }
}
