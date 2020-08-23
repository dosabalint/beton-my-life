import { Controller, Get, Post } from '@nestjs/common';
import { Observable } from 'rxjs';
import { ApiResponse, ApiTags } from '@nestjs/swagger';

import { ChallengesService } from '../../services/challenges.service';
import { ChallengeDto } from '../../models/challenge.dto';
import { Challenge } from '../../models/challenge';

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
  @ApiResponse({ type: [ChallengeDto] })
  create(): Observable<ChallengeDto[]> {
    // TODO
    return this.challengesService.list();
  }

  @Get('seed')
  seed(): Observable<Challenge> {
    return this.challengesService.seed();
  }
}
