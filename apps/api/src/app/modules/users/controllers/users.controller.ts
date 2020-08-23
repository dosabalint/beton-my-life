import {
  ApiConflictResponse,
  ApiForbiddenResponse,
  ApiResponse,
  ApiTags,
} from '@nestjs/swagger';
import {
  Body,
  Controller,
  Get,
  Post,
  Request,
  UseGuards,
} from '@nestjs/common';
import { Observable } from 'rxjs';

import { UsersService } from '../services/users.service';
import { AuthGuard } from '../../auth/guards/auth.guard';
import { ProfileDto } from '../models/profile.dto';
import { DbCreateMessage } from '../../../types/db-create-message';
import { UserDto } from '../models/user.dto';
import { UserCreateDto } from '../models/user-create.dto';

@Controller('users')
@ApiTags('users')
export class UsersController {
  constructor(private userService: UsersService) {}

  @Get()
  @UseGuards(AuthGuard)
  @ApiResponse({ status: 200, type: [UserDto] })
  @ApiForbiddenResponse({ description: 'Forbidden' })
  list(): Observable<UserDto[]> {
    return this.userService.list();
  }

  @Post()
  @ApiResponse({ status: 201, type: UserDto })
  @ApiConflictResponse({ description: 'Conflict with current state.' })
  register(@Body() userCreateDto: UserCreateDto) {
    return this.userService.create(userCreateDto);
  }

  @Get('seed')
  @ApiResponse({ status: 200, type: DbCreateMessage })
  @ApiForbiddenResponse({ description: 'Forbidden' })
  seed(): Observable<DbCreateMessage> {
    return this.userService.seed();
  }

  @Get('me')
  @UseGuards(AuthGuard)
  @ApiResponse({ status: 200, type: ProfileDto })
  @ApiForbiddenResponse({ description: 'Forbidden' })
  info(@Request() request): ProfileDto {
    const { firstName, lastName, email, id } = request.user;
    return { firstName, lastName, email, id };
  }
}
