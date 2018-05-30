import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.css']
})
export class LoginPageComponent implements OnInit {

   selectedProfile;

  constructor(private router: Router,) { }

  ngOnInit() {
  }

  redirect() {
   console.log('Current value ', this.selectedProfile);
   if(this.selectedProfile && this.selectedProfile === 'teacher'){
      this.router.navigate(['teacher-dashboard'])
   } else {
      this.router.navigate(['student-dashboard']);
   }
  }
}
