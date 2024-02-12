import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { RegisterDto } from 'src/app/dtos/RegisterDto';
import { AuthService } from 'src/app/services/auth.service';


@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {
  email: string= '';
  password: string= '';
  userName: string= '';

  constructor(private authService: AuthService, private route: Router) { }


  onSubmit() {
    const registerDto: RegisterDto = {
      userName:this.userName,
      email : this.email,
      password : this.password,
    }

    this.authService.register(registerDto).subscribe(
        () => {
          console.log('Registration successful');

          // After successful registration, navigate to login page
          this.route.navigateByUrl('/login');
        },
        (error: any) => {
          console.error('Registration failed:', error);
        }
      );
  }
}
