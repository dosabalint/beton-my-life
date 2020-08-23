import { Injectable } from '@nestjs/common';

import { UsersRepository } from '../repositories/users.repository';

@Injectable()
export class UsersService {
  constructor(private userRepository: UsersRepository) {}

  seed() {
    return this.userRepository.create(this.userRepository.mock());
  }
}
