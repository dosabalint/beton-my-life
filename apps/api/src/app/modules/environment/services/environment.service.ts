import { Injectable } from '@nestjs/common';
import { environment } from '../../../../environments/environment';

@Injectable()
export class EnvironmentService {
  getUserDbUrl(): string {
    return environment.userDbUrl;
  }

  getChallengeDbUrl(path: string = ''): string {
    if (path) {
      return environment.challengeDbUrl.replace('.json', path + '.json');
    }
    return environment.challengeDbUrl;
  }
}
