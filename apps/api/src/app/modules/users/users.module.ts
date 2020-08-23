import { HttpModule, Module } from '@nestjs/common';

import { UsersController } from './controllers/users.controller';
import { UsersRepository } from './repositories/users.repository';
import { UsersService } from './services/users.service';
import { EnvironmentModule } from '../environment/environment.module';
import { AuthModule } from '../auth/auth.module';

@Module({
  imports: [HttpModule, EnvironmentModule, AuthModule],
  providers: [UsersRepository, UsersService],
  controllers: [UsersController],
  exports: [UsersRepository],
})
export class UsersModule {}
