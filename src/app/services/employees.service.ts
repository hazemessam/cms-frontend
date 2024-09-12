import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { PaginationRes } from '../models/pagination.model';
import {
  Employee,
  GetEmployeesOptions,
  UpdateEmployeeReqDto,
} from '../models/employees.model';
import { BACKEND_BASE_URL } from '../../constants';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class EmployeesService {
  selectedEmployeeForUpdate$ = new BehaviorSubject<Employee | null>(null);

  constructor(private httpClient: HttpClient) {}

  getEmployees(
    options?: GetEmployeesOptions
  ): Observable<PaginationRes<Employee>> {
    const params = new HttpParams({ fromObject: options });
    return this.httpClient.get<PaginationRes<Employee>>(
      `${BACKEND_BASE_URL}/employees`,
      { params }
    );
  }

  updateEmployee(emp: Employee) {
    const updateEmployeeReq: UpdateEmployeeReqDto = {
      name: emp.name,
      email: emp.email,
      phoneNumber: emp.phoneNumber,
      nationalId: emp.nationalId,
      hiringDate: emp.hiringDate,
    };

    return this.httpClient.patch(
      `${BACKEND_BASE_URL}/employees/${emp.id}`,
      updateEmployeeReq
    );
  }

  deleteEmployee(empId: number) {
    return this.httpClient.delete(`${BACKEND_BASE_URL}/employees/${empId}`);
  }
}
