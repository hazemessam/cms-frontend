import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import { AuthService } from '../services/auth.service';
import { Role } from '../models/auth.model';

@Injectable({
  providedIn: 'root',
})
export class EmployeesGuard implements CanActivate {
  constructor(private authService: AuthService) {}

  canActivate(): boolean {
    const allowedRoles = [Role.ADMIN, Role.HR];
    const user = this.authService.user$.value;
    return !!user && allowedRoles.includes(user.role);
  }
}
