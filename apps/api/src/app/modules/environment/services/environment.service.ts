import { Injectable } from '@nestjs/common';
import { environment } from '../../../../environments/environment';

@Injectable()
export class EnvironmentService {
  getUserDbUrl(): string {
    return environment.userDbUrl;
  }
}
