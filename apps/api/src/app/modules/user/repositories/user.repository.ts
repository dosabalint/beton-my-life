import { HttpService, Injectable } from '@nestjs/common';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

import { EnvironmentService } from '../../environment/services/environment.service';
import { UserDto } from '../models/user.dto';
import { extractResponseData } from '../../../helpers/operators/extractResponseData';
import { DbCreateMessage } from '../../../types/db-create-message';

@Injectable()
export class UserRepository {
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
}
