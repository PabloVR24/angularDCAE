import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styles: [],
})
export class LoginComponent {
  login() {
    this.authService.login().subscribe((resp) => {
      if (resp.id) {
        this.router.navigate(['./heroes']);
      }
    });
  }

  constructor(private router: Router, private authService: AuthService) {}
}
