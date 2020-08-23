import { ConflictException, Injectable } from '@nestjs/common';

import { UsersRepository } from '../repositories/users.repository';
import { Observable } from 'rxjs';
import { UserDto } from '../models/user.dto';
import { DbCreateMessage } from '../../../types/db-create-message';
import { UserCreateDto } from '../models/user-create.dto';
import { switchMap, tap } from 'rxjs/operators';

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
    return this.userRepository.getByEmail(userCreateDto.email).pipe(
      tap((list) => {
        if (list.length > 0) {
          throw new ConflictException();
        }
      }),
      switchMap(() => this.userRepository.create(userCreateDto))
    );
  }
}
