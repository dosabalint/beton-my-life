import { ApiProperty } from '@nestjs/swagger';
import * as Chance from 'chance';
import { IsBoolean, IsString } from 'class-validator';

const chance = Chance();

export class ChallengeDto {
  @IsString()
  @ApiProperty({ type: String, example: chance.guid() })
  id: string;

  @IsBoolean()
  @ApiProperty({ type: Boolean, example: chance.bool() })
  isDeleted: boolean;

  @IsString()
  @ApiProperty({ type: String, example: chance.guid() })
  author: string;

  @IsString()
  @ApiProperty({ type: String, example: chance.word() })
  title: string;

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
