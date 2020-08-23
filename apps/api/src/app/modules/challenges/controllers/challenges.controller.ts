import { Body, Controller, Get, Param, Post } from '@nestjs/common';
import { Observable } from 'rxjs';
import { ApiResponse, ApiTags } from '@nestjs/swagger';

import { ChallengesService } from '../services/challenges.service';
import { ChallengeDto } from '../models/challenge.dto';
import { Challenge } from '../models/challenge';
import { ChallengeCreateDto } from '../models/challenge-create.dto';

@Controller('challenges')
@ApiTags('challenges')
export class ChallengesController {
  constructor(private challengesService: ChallengesService) {}

  @Get()
  @ApiResponse({ type: [ChallengeDto] })
  list(): Observable<ChallengeDto[]> {
    return this.challengesService.list();
  }

  @Post()
  @ApiResponse({ type: ChallengeDto })
  create(
    @Body() challengeCreateDto: ChallengeCreateDto
  ): Observable<ChallengeDto> {
    return this.challengesService.create(challengeCreateDto);
  }

  @Get('seed')
  seed(): Observable<Challenge> {
    return this.challengesService.seed();
  }

  @Get(':userId')
  @ApiResponse({ type: [ChallengeDto] })
  listByUserid(@Param('userId') userId: string): Observable<ChallengeDto[]> {
    return this.challengesService.listByUserId(userId);
  }
}
