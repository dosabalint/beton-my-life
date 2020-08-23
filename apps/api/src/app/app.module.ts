import { MiddlewareConsumer, Module, NestModule } from '@nestjs/common';

import { UsersModule } from './modules/users/users.module';
import { EnvironmentModule } from './modules/environment/environment.module';
import { AuthModule } from './modules/auth/auth.module';
import { AuthMiddleware } from './modules/auth/middlewares/auth.middleware';
import { ChallengesModule } from './modules/challenges/challenges.module';

@Module({
  imports: [AuthModule, ChallengesModule, UsersModule, EnvironmentModule],
})
export class AppModule implements NestModule {
  configure(consumer: MiddlewareConsumer): any {
    consumer.apply(AuthMiddleware).forRoutes('*');
  }
}
