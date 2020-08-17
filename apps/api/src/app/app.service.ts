import { Injectable } from '@nestjs/common';
import { Message } from '@beton-my-life/api-interfaces';

@Injectable()
export class AppService {
  getData(): Message {
    return { message: 'Welcome to api!' };
  }
}
