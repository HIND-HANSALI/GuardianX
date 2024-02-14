import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { RoleResponseDTO } from 'src/app/dtos/responses/RoleResponseDTO';
import { environment } from 'src/environement/environment';

@Injectable({
  providedIn: 'root'
})
export class RoleService {

  constructor(private http: HttpClient) {}

  getAllRoles(): Observable<RoleResponseDTO[]> {
    return this.http.get<RoleResponseDTO[]>(`${environment.apiUrl}/role`);
  }
}
