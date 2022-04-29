import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
<<<<<<< HEAD

import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
=======
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { RouterModule, Routes } from '@angular/router';
import { ExamComponent } from './exam/exam.component';
import { MatCardModule } from '@angular/material/card';
import { MatGridListModule } from '@angular/material/grid-list';
import { NgxSimpleCountdownModule } from 'ngx-simple-countdown';
import { ApiService } from './api.service';
import { LoggingService } from './logging.service';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    ExamComponent
  ],
  imports: [
    MatCardModule,
    MatGridListModule,
    NgxSimpleCountdownModule,
    BrowserModule,
    RouterModule.forRoot([
      { path: '', component: AppComponent },
      { path: 'login', component: LoginComponent },
      { path: 'exam', component: ExamComponent }
    ])
  ],
  providers: [
    ApiService,
    LoggingService
  ],
>>>>>>> 4c489f7f12e7a0d07d5a73a4d212a972c1eb9049
  bootstrap: [AppComponent]
})
export class AppModule { }
