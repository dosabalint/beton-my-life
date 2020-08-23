import { Routes } from '@angular/router';
import { LoginComponent } from '../pages/login/login.component';
import { HomeComponent } from '../pages/home/home.component';
import { AuthGuard } from '../guards/auth.guard';
import { ProfileComponent } from '../pages/profile/profile.component';
import { ChallengesComponent } from '../pages/challenges/challenges.component';

export const routes: Routes = [
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full',
  },

  {
    path: 'login',
    component: LoginComponent,
  },

  {
    path: '',
    canActivate: [AuthGuard],
    children: [
      {
        path: 'home',
        component: HomeComponent,
      },
      {
        path: 'profile',
        component: ProfileComponent,
      },
      {
        path: 'challenges',
        component: ChallengesComponent,
      },
    ],
  },
];
