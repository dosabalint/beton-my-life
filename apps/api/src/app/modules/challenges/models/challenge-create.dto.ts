import { ApiProperty } from '@nestjs/swagger';
import * as Chance from 'chance';
import { IsBoolean, IsString } from 'class-validator';

const chance = Chance();

export class ChallengeCreateDto {
  @IsString()
  @ApiProperty({ type: String, example: chance.word() })
  title: string;

  @IsString()
  @ApiProperty({ type: String, example: chance.guid() })
  author: string;

  @IsString()
  @ApiProperty({ type: String, example: chance.paragraph() })
  description: string;

  @IsBoolean()
  @ApiProperty({ type: Boolean, example: chance.bool() })
  isActive: boolean;

  @IsString()
  @ApiProperty({
    type: String,
    example: new Date(chance.timestamp()).toISOString(),
  })
  endDate: string;

  @IsBoolean()
  @ApiProperty({ type: Boolean, example: chance.bool() })
  outcome: boolean;

  @IsString()
  @ApiProperty({ type: String, example: chance.url() })
  proofUrl: string;
}
