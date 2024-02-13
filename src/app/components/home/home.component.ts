import { Component } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {


  constructor(private authService: AuthService) {}

  testApi() {
    this.authService.testApi().subscribe(
      response => {
      console.log('API Test Response:', response);
    }, error => {
      console.error('API Test Error:', error);
    });
  }

}
