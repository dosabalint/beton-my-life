import { IsOptional, IsString } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';

export class UserCreateDto {
  @IsString()
  @ApiProperty({ type: String })
  firstName: string;

  @IsString()
  @ApiProperty({ type: String })
  lastName: string;

  @IsString()
  @ApiProperty({ type: String })
  email: string;

  @IsString()
  @ApiProperty({ type: String })
  @IsOptional()
  token: string;
}
