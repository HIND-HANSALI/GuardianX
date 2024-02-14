import { Resolve, RouterStateSnapshot, ActivatedRouteSnapshot } from '@angular/router';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { RoleService } from 'src/app/services/role/role.service';
import { RoleResponseDTO } from 'src/app/dtos/responses/RoleResponseDTO';

@Injectable({
  providedIn: 'root'
})
export class RoleResolver implements Resolve<RoleResponseDTO[]> {

  constructor(private roleService: RoleService) {}


  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<RoleResponseDTO[]> | Promise<RoleResponseDTO[]> | RoleResponseDTO[] {
    return this.roleService.getAllRoles();
  }
}

