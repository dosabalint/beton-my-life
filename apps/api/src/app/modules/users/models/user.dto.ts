import { IsOptional, IsString } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';

export class UserDto {
  @IsString()
  @ApiProperty({ type: String })
  name: string;

  @IsString()
  @ApiProperty({ type: String })
  email: string;

  @IsString()
  @ApiProperty({ type: String })
  @IsOptional()
  token?: string;
}
