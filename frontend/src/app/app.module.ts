import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { RouterModule, Routes } from '@angular/router';
import { ExamComponent } from './exam/exam.component';
import { MatCardModule } from '@angular/material/card';
import { MatGridListModule } from '@angular/material/grid-list';
import { NgxSimpleCountdownModule } from 'ngx-simple-countdown';
import { ApiService } from './api.service';
import { LoggingService } from './logging.service';
import { PiechartComponent } from './piechart/piechart.component';
import { HighchartsChartModule } from 'highcharts-angular';
import { ViewQuesComponent } from './view-ques/view-ques.component';
import { MatListModule } from '@angular/material/list';
import { MatIconModule } from '@angular/material/icon';
import {MatTableModule} from '@angular/material/table'

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    ExamComponent,
    PiechartComponent,
    ViewQuesComponent,
  ],
  exports: [
    AppComponent, 
    LoginComponent,
    ExamComponent,
    PiechartComponent, 
    ViewQuesComponent,
  ],
  imports: [
    MatCardModule,
    MatGridListModule,
    NgxSimpleCountdownModule,
    BrowserModule,
    HighchartsChartModule,
    MatListModule,
    MatIconModule,
    MatTableModule,
    RouterModule.forRoot([
      { path: '', component: AppComponent },
      { path: 'login', component: LoginComponent },
      { path: 'exam', component: ExamComponent },
      { path: 'qid/stats', component: PiechartComponent },
      { path: 'view-ques', component: ViewQuesComponent }
    ])
  ],
  providers: [
    ApiService,
    LoggingService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
