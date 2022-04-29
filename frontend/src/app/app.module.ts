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
import { ProfileComponent } from './profile/profile.component';
import { StudentComponent } from './profile/student/student.component';
import { FacultyComponent } from './profile/faculty/faculty.component';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatSelectModule } from '@angular/material/select';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { PiechartComponent } from './piechart/piechart.component';
import { HighchartsChartModule } from 'highcharts-angular';
import { ViewQuesComponent } from './view-ques/view-ques.component';
import { MatListModule } from '@angular/material/list';
import {MatTableModule} from '@angular/material/table'

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    ExamComponent,
    ProfileComponent,
    StudentComponent,
    FacultyComponent,


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
    MatProgressSpinnerModule,
    NgxSimpleCountdownModule,
    MatSelectModule,
    MatFormFieldModule,
    MatIconModule,
    MatInputModule,
    MatButtonModule,
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    HighchartsChartModule,
    MatListModule,
    MatIconModule,
    MatTableModule,
    RouterModule.forRoot([
      { path: '', component: AppComponent },
      { path: 'login', component: LoginComponent },
      { path: 'exam', component: ExamComponent },
      { path: 'student', component:StudentComponent},
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
