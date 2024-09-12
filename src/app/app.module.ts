import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { LoginComponent } from './components/login/login.component';
import { routes } from './app.routes';
import { HeaderComponent } from './components/header/header.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {
  HTTP_INTERCEPTORS,
  provideHttpClient,
  withInterceptorsFromDi,
} from '@angular/common/http';
import { MatTableModule } from '@angular/material/table';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatDialogModule } from '@angular/material/dialog';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ErrorInterceptor } from './interceptors/error.interceptor';
import { NotificationComponent } from './components/notification/notification.component';
import { AuthInterceptor } from './interceptors/auth.interceptor';
import { UserInfoComponent } from './components/header/user-info/user-info.component';
import { HomeComponent } from './components/home/home.component';
import { NavigationComponent } from './components/header/navigation/navigation.component';
import { EmployeesComponent } from './components/employees/employees.component';
import { UpdateEmployeeComponent } from './components/employees/update-employee/update-employee.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    HeaderComponent,
    NotificationComponent,
    UserInfoComponent,
    HomeComponent,
    NavigationComponent,
    EmployeesComponent,
    UpdateEmployeeComponent,
  ],
  imports: [
    RouterModule.forRoot(routes),
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    MatTableModule,
    MatPaginatorModule,
    MatDialogModule,
  ],
  providers: [
    provideHttpClient(withInterceptorsFromDi()),
    { provide: HTTP_INTERCEPTORS, useClass: AuthInterceptor, multi: true },
    { provide: HTTP_INTERCEPTORS, useClass: ErrorInterceptor, multi: true },
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
