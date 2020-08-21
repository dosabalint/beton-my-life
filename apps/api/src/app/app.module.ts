import { MiddlewareConsumer, Module, NestModule } from '@nestjs/common';

import { UserModule } from './modules/user/user.module';
import { EnvironmentModule } from './modules/environment/environment.module';
import { AuthModule } from './modules/auth/auth.module';
import { AuthMiddleware } from './modules/auth/middlewares/auth.middleware';

@Module({
  imports: [AuthModule, UserModule, EnvironmentModule],
})
export class AppModule implements NestModule {
  configure(consumer: MiddlewareConsumer): any {
    consumer.apply(AuthMiddleware).forRoutes('*');
  }
}
