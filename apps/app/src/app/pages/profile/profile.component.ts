import { Component, OnInit } from '@angular/core';
import { SessionQuery } from '../../store/session.query';

@Component({
  selector: 'beton-my-life-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss'],
})
export class ProfileComponent implements OnInit {
  constructor(public sessionQuery: SessionQuery) {}

  ngOnInit(): void {}
}
