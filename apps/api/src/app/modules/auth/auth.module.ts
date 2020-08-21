import {
  HttpModule,
  MiddlewareConsumer,
  Module,
  NestModule,
} from '@nestjs/common';

import { AuthController } from './controllers/auth.controller';
import { AuthService } from './services/auth.service';
import { EnvironmentModule } from '../environment/environment.module';
import { AuthMiddleware } from './middlewares/auth.middleware';

@Module({
  imports: [EnvironmentModule, HttpModule],
  controllers: [AuthController],
  providers: [AuthService],
  exports: [AuthService],
})
export class AuthModule implements NestModule {
  configure(consumer: MiddlewareConsumer): any {
    consumer.apply(AuthMiddleware).forRoutes('*');
  }
}
