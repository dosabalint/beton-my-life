import { IsString } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';

export class UserDto {
  @IsString()
  @ApiProperty({ type: String })
  id: string;

  @IsString()
  @ApiProperty({ type: String })
  firstName: string;

  @IsString()
  @ApiProperty({ type: String })
  lastName: string;

  @IsString()
  @ApiProperty({ type: String })
  email: string;
}
