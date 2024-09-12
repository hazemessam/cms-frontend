import { Routes } from '@angular/router';
import { LoginComponent } from './components/login/login.component';
import { HomeComponent } from './components/home/home.component';
import { EmployeesComponent } from './components/employees/employees.component';
import { EmployeesGuard } from './guards/admin.guard';

export const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
  },
  {
    path: 'login',
    component: LoginComponent,
  },
  {
    path: 'employees',
    component: EmployeesComponent,
    canActivate: [EmployeesGuard],
  },
  {
    path: '**',
    redirectTo: '',
  },
];
