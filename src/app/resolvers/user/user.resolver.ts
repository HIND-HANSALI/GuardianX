import { Resolve, RouterStateSnapshot, ActivatedRouteSnapshot } from '@angular/router';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { AuthService } from 'src/app/services/auth.service';
import { AuthenticationResponseDTO } from 'src/app/dtos/responses/AuthenticationResponseDTO';

@Injectable({
  providedIn: 'root'
})
export class UserResolver implements Resolve<AuthenticationResponseDTO[]> {

  constructor(private authService: AuthService) {}


  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<AuthenticationResponseDTO[]> | Promise<AuthenticationResponseDTO[]> | AuthenticationResponseDTO[] {
    return this.authService.getAllUsers();
  }
}
export default UserResolver;