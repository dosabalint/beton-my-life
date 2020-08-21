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
import { ContextMenuModule, InputTextModule, MenubarModule } from 'primeng';

@NgModule({
  declarations: [AppComponent, LoginComponent, MenuComponent, HomeComponent],
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
  ],
  providers: [EnvironmentService, SessionStore, SessionQuery],
  bootstrap: [AppComponent],
})
export class AppModule {}
