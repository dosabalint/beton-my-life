import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { ButtonModule } from 'primeng/button';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './routing/app-routing.module';
import { LoginComponent } from './pages/login/login.component';
import { EnvironmentService } from './services/environment.service';
import { SessionStore } from './store/session.store';
import { SessionQuery } from './store/session.query';
import { MenuComponent } from './components/menu/menu.component';
import { HomeComponent } from './pages/home/home.component';
import {
  CardModule,
  ContextMenuModule,
  InputTextModule,
  MenubarModule,
  MessageService,
  TableModule,
  ToastModule,
} from 'primeng';
import { ProfileComponent } from './pages/profile/profile.component';
import { ChallengesComponent } from './pages/challenges/challenges.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    MenuComponent,
    HomeComponent,
    ProfileComponent,
    ChallengesComponent,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    RouterModule,
    AppRoutingModule,
    FormsModule,
    ButtonModule,
    MenubarModule,
    ContextMenuModule,
    InputTextModule,
    CardModule,
    TableModule,
    ToastModule,
    BrowserAnimationsModule,
  ],
  providers: [EnvironmentService, SessionStore, SessionQuery, MessageService],
  bootstrap: [AppComponent],
})
export class AppModule {}
