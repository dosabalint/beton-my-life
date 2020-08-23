import { ApiForbiddenResponse, ApiResponse, ApiTags } from '@nestjs/swagger';
import { Controller, Get, Request, UseGuards } from '@nestjs/common';
import { Observable } from 'rxjs';

import { UsersRepository } from '../repositories/users.repository';
import { UsersService } from '../services/users.service';
import { AuthGuard } from '../../auth/guards/auth.guard';
import { ProfileDto } from '../models/profile.dto';
import { DbCreateMessage } from '../../../types/db-create-message';
import { UserDto } from '../models/user.dto';

@Controller('users')
@UseGuards(AuthGuard)
@ApiTags('users')
export class UsersController {
  constructor(
    private userService: UsersService,
    private userRepository: UsersRepository
  ) {}

  @Get()
  @ApiResponse({ status: 200, type: [UserDto] })
  @ApiForbiddenResponse({ description: 'Forbidden' })
  list(): Observable<UserDto[]> {
    return this.userRepository.list();
  }

  @Get('seed')
  @ApiResponse({ status: 200, type: DbCreateMessage })
  @ApiForbiddenResponse({ description: 'Forbidden' })
  seed(): Observable<DbCreateMessage> {
    return this.userService.seed();
  }

  @Get('me')
  @ApiResponse({ status: 200, type: ProfileDto })
  @ApiForbiddenResponse({ description: 'Forbidden' })
  info(@Request() request): ProfileDto {
    const { name, email } = request.user;
    return { name, email };
  }
}
