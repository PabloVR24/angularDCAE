import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Auth } from 'src/app/auth/interfaces/auth.interface';
import { AuthService } from 'src/app/auth/services/auth.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styles: [
    `
      .right-margin {
        padding-right: 1vh;
      }
      .container {
        margin: 10px;
      }
    `,
  ],
})
export class HomeComponent {
  get auth() {
    return this.authService.getAuth;
  }
  
  logOut() {
    this.router.navigate(['./auth']);
  }

  constructor(private router: Router, private authService: AuthService) {}
}
