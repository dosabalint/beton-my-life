import { Module } from '@nestjs/common';

import { UserModule } from './modules/user/user.module';
import { EnvironmentModule } from './modules/environment/environment.module';
import { AuthModule } from './modules/auth/auth.module';

@Module({
  imports: [UserModule, EnvironmentModule, AuthModule],
})
export class AppModule {}
