import { Injectable } from '@nestjs/common';

import { UsersRepository } from '../repositories/users.repository';
import { Observable } from 'rxjs';
import { UserDto } from '../models/user.dto';
import { DbCreateMessage } from '../../../types/db-create-message';
import { UserCreateDto } from '../models/user-create.dto';

@Injectable()
export class UsersService {
  constructor(private userRepository: UsersRepository) {}

  list(): Observable<UserDto[]> {
    return this.userRepository.list();
  }

  seed(): Observable<DbCreateMessage> {
    return this.userRepository.create(this.userRepository.mock());
  }

  create(userCreateDto: UserCreateDto): Observable<DbCreateMessage> {
    return this.userRepository.create(userCreateDto);
  }
}
