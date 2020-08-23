import { Injectable } from '@nestjs/common';
import { environment } from '../../../../environments/environment';

@Injectable()
export class EnvironmentService {
  getUserDbUrl(path: string = ''): string {
    if (path) {
      return environment.userDbUrl.replace('.json', path + '.json');
    }
    return environment.userDbUrl;
  }

  getChallengeDbUrl(path: string = ''): string {
    if (path) {
      return environment.challengeDbUrl.replace('.json', path + '.json');
    }
    return environment.challengeDbUrl;
  }
}
