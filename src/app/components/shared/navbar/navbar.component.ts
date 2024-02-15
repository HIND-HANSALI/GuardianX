import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent {
  constructor(private router: Router) {}

  

  hasAuthority(): boolean {

    const role = localStorage.getItem('role');

    return this.isLoggedIn() && (role === 'ADMIN' || role === 'SUPER_ADMIN');
  }

  isLoggedIn(): boolean {
    return localStorage.getItem('token') !== null;
  }

  isLoggedOut(): boolean{
    return localStorage.getItem('token') == null;
  }
  Logout(): void {
    localStorage.removeItem('token');
    localStorage.removeItem('role');
    this.router.navigate(["login"])
  }

}
