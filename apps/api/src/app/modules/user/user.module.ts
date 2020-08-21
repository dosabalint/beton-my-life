import { HttpModule, Module } from '@nestjs/common';

import { UserController } from './controllers/user.controller';
import { UserRepository } from './repositories/user.repository';
import { UserService } from './services/user.service';
import { EnvironmentModule } from '../environment/environment.module';
import { AuthModule } from '../auth/auth.module';

@Module({
  imports: [HttpModule, EnvironmentModule, AuthModule],
  providers: [UserRepository, UserService],
  controllers: [UserController],
  exports: [UserRepository],
})
export class UserModule {}
