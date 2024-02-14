import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { AuthenticationResponseDTO } from 'src/app/dtos/responses/AuthenticationResponseDTO';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent {

  users: AuthenticationResponseDTO[] = [];

  constructor(
    private authService: AuthService,private activeRoute: ActivatedRoute) { }

    ngOnInit(): void {
      this.loadUsers();
    }
  
    loadUsers() {
      // this.authService.getAllUsers().subscribe(users => {
      //   this.users = users;
      // });
      this.users=this.activeRoute.snapshot.data['users'];
  }
}
