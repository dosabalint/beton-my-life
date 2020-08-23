import { Component, OnInit } from '@angular/core';
import { Observable, of } from 'rxjs';
import { ChallengeDto } from '../../models/challenge.dto';
import { ChallengesService } from '../../services/challenges.service';
import { switchMap, tap } from 'rxjs/operators';
import { SessionQuery } from '../../store/session.query';
import { MessageService } from 'primeng';

@Component({
  selector: 'beton-my-life-my-challenges',
  templateUrl: './my-challenges.component.html',
  styleUrls: ['./my-challenges.component.scss'],
})
export class MyChallengesComponent implements OnInit {
  challenges$: Observable<ChallengeDto[]>;

  constructor(
    private challengesService: ChallengesService,
    public sessionQuery: SessionQuery,
    private messageService: MessageService
  ) {}

  ngOnInit() {
    this.challenges$ = this.sessionQuery.id$.pipe(
      switchMap((id) => {
        if (id) {
          return this.challengesService.listByUserId(id).pipe(
            tap((response) => {
              console.log({ response });
            })
          );
        } else {
          return of([]);
        }
      }),
      tap((x) => console.log({ x }))
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
