import { HttpService, Injectable } from '@nestjs/common';
import { map } from 'rxjs/operators';

import { EnvironmentService } from '../../environment/services/environment.service';
import { UserDtoDictionary } from '../../../types/user-dto-dictionary';
import { Observable } from 'rxjs';
import { UserDto } from '../../user/models/user.dto';

@Injectable()
export class AuthService {
  constructor(
    private httpService: HttpService,
    private environmentService: EnvironmentService
  ) {}

  getUserData$(token: string): Observable<UserDto> {
    return this.httpService
      .get<UserDtoDictionary>(this.environmentService.getUserDbUrl(), {
        params: {
          orderBy: '"token"',
          equalTo: `"${token}"`,
        },
      })
      .pipe(map(({ data }) => Object.values(data)[0]));
  }
}
