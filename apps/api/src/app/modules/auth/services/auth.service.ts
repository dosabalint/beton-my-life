import { HttpService, Injectable } from '@nestjs/common';
import { map } from 'rxjs/operators';

import { EnvironmentService } from '../../environment/services/environment.service';
import { Observable } from 'rxjs';
import { UserDto } from '../../users/models/user.dto';
import { Dictionary } from '../../../types/dictionary';

@Injectable()
export class AuthService {
  constructor(
    private httpService: HttpService,
    private environmentService: EnvironmentService
  ) {}

  getUserData$(token: string): Observable<UserDto> {
    return this.httpService
      .get<Dictionary<UserDto>>(this.environmentService.getUserDbUrl(), {
        params: {
          orderBy: '"token"',
          equalTo: `"${token}"`,
        },
      })
      .pipe(map(({ data }) => Object.values(data)[0]));
  }
}
