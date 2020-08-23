import { HttpModule, Module } from '@nestjs/common';
import { ChallengesController } from './controllers/challenges.controller';
import { ChallengesRepository } from './repositories/challenges.repository';
import { ChallengesService } from './services/challenges.service';
import { EnvironmentModule } from '../environment/environment.module';

@Module({
  controllers: [ChallengesController],
  providers: [ChallengesRepository, ChallengesService],
  imports: [EnvironmentModule, HttpModule],
})
export class ChallengesModule {}
