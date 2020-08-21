import { ApiProperty } from '@nestjs/swagger';

export class DbCreateMessage {
  @ApiProperty({ type: String })
  name: string;
}
