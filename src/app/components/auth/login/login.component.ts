import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { LoginDto } from 'src/app/dtos/LoginDto';
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
    const loginDto: LoginDto = {
      email : this.email,
      password : this.password,
    }
    this.authService.login(loginDto).subscribe(
      (response) => {
        console.log('Login successful!', response);
        this.route.navigate(["home"])
      },
      (error) => {
        
        console.error('Login failed!', error);
      }
    );
  }

}
