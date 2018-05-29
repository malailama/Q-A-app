import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CommonModule } from '@angular/common';

import { LoginPageComponent } from '../pages/login-page/login-page.component';

const routes: Routes = [
   { path: 'login', component: LoginPageComponent},
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
