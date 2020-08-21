import { Controller, Get, Request, UseGuards } from '@nestjs/common';
import { UserRepository } from '../repositories/user.repository';
import { UserService } from '../services/user.service';
import { AuthGuard } from '../../auth/guards/auth.guard';
import { ProfileDto } from '../models/profile.dto';
import { ApiForbiddenResponse, ApiResponse, ApiTags } from '@nestjs/swagger';
import { Observable } from 'rxjs';
import { DbCreateMessage } from '../../../types/db-create-message';
import { UserDto } from '../models/user.dto';

@Controller('user')
@UseGuards(AuthGuard)
@ApiTags('user')
export class UserController {
  constructor(
    private userService: UserService,
    private userRepository: UserRepository
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
