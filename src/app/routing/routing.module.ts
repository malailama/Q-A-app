import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CommonModule } from '@angular/common';

import { LoginPageComponent } from '../pages/login-page/login-page.component';
import { TeacherDashboardComponent } from '../pages/teacher-dashboard/teacher-dashboard.component';

const routes: Routes = [
   { path: 'login', component: LoginPageComponent},
   { path: 'teacher-dashboard', component: TeacherDashboardComponent},
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
