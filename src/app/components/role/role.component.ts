import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { RoleResponseDTO } from 'src/app/dtos/responses/RoleResponseDTO';
import { RoleService } from 'src/app/services/role/role.service';

@Component({
  selector: 'app-role',
  templateUrl: './role.component.html',
  styleUrls: ['./role.component.css']
})
export class RoleComponent implements OnInit{
  roles: RoleResponseDTO[] = [];

  constructor(
    private roleService: RoleService,private activeRoute: ActivatedRoute) { }

    ngOnInit(): void {
      this.loadRoles();
    }
  
    loadRoles() {
      // this.roleService.getAllRoles().subscribe(roles => {
      //   this.roles = roles;
      // });
      this.roles=this.activeRoute.snapshot.data['roles'];
    }

}
