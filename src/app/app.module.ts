import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule }   from '@angular/forms';
import { HttpClientModule} from '@angular/common/http';
import { HttpClientInMemoryWebApiModule } from 'angular-in-memory-web-api';
import { InMemoryDataService }  from './services/in-memory-data.service';

import { RoutingModule } from './routing/routing.module';

import { DataService } from './services/data.service';

import { AppComponent } from './app.component';
import { LoginPageComponent } from './pages/login-page/login-page.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { TeacherDashboardComponent } from './pages/teacher-dashboard/teacher-dashboard.component';
import { AddQuestionComponent } from './pages/add-question/add-question.component';
import { StudentDashboardComponent } from './pages/student-dashboard/student-dashboard.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginPageComponent,
    NavbarComponent,
    TeacherDashboardComponent,
    AddQuestionComponent,
    StudentDashboardComponent
  ],
  imports: [
    BrowserModule,
    RoutingModule,
    FormsModule,
    HttpClientModule,
    HttpClientInMemoryWebApiModule.forRoot(
      InMemoryDataService, { dataEncapsulation: false }
    )
  ],
  providers: [
     DataService,
   ],
  bootstrap: [AppComponent]
})
export class AppModule { }
