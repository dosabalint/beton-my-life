import { Body, Controller, Get, HttpCode, UseGuards } from '@nestjs/common';
import { AuthGuard } from '../guards/auth.guard';

@Controller('auth')
export class AuthController {
  @Get('validate-token')
  @UseGuards(AuthGuard)
  @HttpCode(204)
  validateToken(@Body('token') token) {}
}
