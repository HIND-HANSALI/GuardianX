import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './components/auth/login/login.component';
import { RegisterComponent } from './components/auth/register/register.component';
import { AccessDeniedComponent } from './components/errors/access-denied/access-denied.component';
import { HomeComponent } from './components/home/home.component';
import { authGuard } from './guards/auth.guard';
import { RoleComponent } from './components/role/role.component';
import { RoleResolver } from './resolvers/role/role.resolver';
import { UserComponent } from './components/auth/user/user.component';
import { UserResolver } from './resolvers/user/user.resolver';
const routes: Routes = [
  { path: '', redirectTo: '/login', pathMatch: 'full' },
  {path: 'login', component: LoginComponent},
  {path: 'register', component: RegisterComponent},
  {path: 'forbidden',component: AccessDeniedComponent},
  {path: 'home',component: HomeComponent, canActivate:[authGuard]},
  {path :'role',component : RoleComponent ,canActivate: [authGuard],resolve: {roles: RoleResolver }},
  {path :'user',component : UserComponent,resolve: {users: UserResolver },canActivate: [authGuard]}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
