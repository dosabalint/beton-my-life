import { Controller, Get, Headers, UseGuards } from '@nestjs/common';
import { UserRepository } from '../repositories/user.repository';
import { UserService } from '../services/user.service';
import { AuthGuard } from '../../auth/guards/auth.guard';

@Controller('user')
export class UserController {
  constructor(
    private userService: UserService,
    private userRepository: UserRepository
  ) {}

  @UseGuards(AuthGuard)
  @Get()
  list() {
    return this.userRepository.list();
  }

  @Get('seed')
  seed() {
    return this.userService.seed();
  }

  @UseGuards(AuthGuard)
  @Get('info')
  info(@Headers('authorization') token) {
    return this.userRepository.getFirstByToken(token.replace('Bearer ', ''));
  }
}
