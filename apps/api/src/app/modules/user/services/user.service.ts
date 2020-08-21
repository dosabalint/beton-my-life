import { Injectable } from '@nestjs/common';
import * as objectHash from 'object-hash';

import { UserRepository } from '../repositories/user.repository';

@Injectable()
export class UserService {
  constructor(private userRepository: UserRepository) {}

  seed() {
    const data = {
      name: 'Dósa Bálint',
      email: 'dosa.balint@gmail.com',
    };
    const pass = 'kiskutya';

    return this.userRepository.create({
      ...data,
      token: objectHash(data.email + ':' + pass),
    });
  }
}
