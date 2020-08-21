import { Body, Controller, Get, UseGuards } from '@nestjs/common';
import { AuthGuard } from '../guards/auth.guard';
import { ApiForbiddenResponse, ApiResponse, ApiTags } from '@nestjs/swagger';

@Controller('auth')
@UseGuards(AuthGuard)
@ApiTags('authentication')
export class AuthController {
  @Get('validate-token')
  @ApiResponse({ status: 204, description: 'Ok' })
  @ApiForbiddenResponse({ description: 'Forbidden' })
  validateToken(@Body('token') token) {}
}
