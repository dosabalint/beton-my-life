import { Component, OnInit } from '@angular/core';
import { ChallengesService } from '../../services/challenges.service';
import { tap } from 'rxjs/operators';
import { Observable } from 'rxjs';
import { ChallengeDto } from '../../models/challenge.dto';
import { MessageService } from 'primeng';

@Component({
  selector: 'beton-my-life-challenges',
  templateUrl: './challenges.component.html',
  styleUrls: ['./challenges.component.scss'],
})
export class ChallengesComponent implements OnInit {
  challenges$: Observable<ChallengeDto[]>;

  constructor(
    private challengesService: ChallengesService,
    private messageService: MessageService
  ) {}

  ngOnInit() {
    this.challenges$ = this.challengesService.list().pipe(
      tap((response) => {
        console.log({ response });
      })
    );
  }

  addChallenge() {
    this.messageService.add({
      severity: 'info',
      summary: 'Not implemented yet',
      detail: 'This function is not implemented yet.',
    });
  }
}
