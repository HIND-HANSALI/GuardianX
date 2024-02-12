import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  email: string= '';
  password: string= '';

  constructor(private authService: AuthService, private route: Router) { }

  onSubmit() {
    this.authService.login(this.email, this.password).subscribe(
      (response) => {
        // Handle successful login, e.g., store token in local storage and navigate to another page
        console.log('Login successful!', response);
        this.route.navigate(["welcome"])
      },
      (error) => {
        // Handle login error, e.g., display error message
        console.error('Login failed!', error);
      }
    );
  }

}
