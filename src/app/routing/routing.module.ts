import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CommonModule } from '@angular/common';

import { LoginPageComponent } from '../pages/login-page/login-page.component';
import { TeacherDashboardComponent } from '../pages/teacher-dashboard/teacher-dashboard.component';
import { StudentDashboardComponent } from '../pages/student-dashboard/student-dashboard.component';
import { AddQuestionComponent } from '../pages/add-question/add-question.component';

const routes: Routes = [
   { path: 'login', component: LoginPageComponent},
   { path: 'teacher-dashboard', component: TeacherDashboardComponent},
   { path: 'student-dashboard', component: StudentDashboardComponent },
   { path: 'add-question', component: AddQuestionComponent },
   { path: '', component: LoginPageComponent},
];

@NgModule({
  imports: [
    RouterModule.forRoot(
       routes,
    )
  ],
  exports: [RouterModule],
})
export class RoutingModule { }
