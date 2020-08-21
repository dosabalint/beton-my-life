import { Injectable, NestMiddleware } from '@nestjs/common';
import { Request, Response } from '@nestjs/common';
import { AuthService } from '../services/auth.service';

@Injectable()
export class AuthMiddleware implements NestMiddleware {
  constructor(private authService: AuthService) {}

  use(request: Request, response: Response, next: () => void) {
    const authHeader = request.headers['authorization'] ?? '';
    const token = authHeader.replace('Bearer ', '');

    if (!token) {
      next();
    } else {
      this.authService.getUserData$(token).subscribe((userData) => {
        request['user'] = userData;
        next();
      });
    }
  }
}
