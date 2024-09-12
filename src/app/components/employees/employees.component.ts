import { AfterViewInit, Component, DestroyRef, ViewChild } from '@angular/core';
import { Employee } from '../../models/employees.model';
import { EmployeesService } from '../../services/employees.service';
import { MatTableDataSource } from '@angular/material/table';
import { MatPaginator } from '@angular/material/paginator';

@Component({
  selector: 'app-employees',
  templateUrl: './employees.component.html',
  styleUrl: './employees.component.scss',
})
export class EmployeesComponent implements AfterViewInit {
  employeesDataSource = new MatTableDataSource<Employee>([]);
  columns = [
    'id',
    'name',
    'email',
    'phoneNumber',
    'nationalId',
    'role',
    'hiringDate',
    'departmentName',
    'actions',
  ];
  @ViewChild(MatPaginator) paginator!: MatPaginator;

  constructor(
    private employeesService: EmployeesService,
    private destroyRef: DestroyRef
  ) {}

  ngAfterViewInit() {
    this.loadEmployees();

    const subscription = this.paginator.page.subscribe(() =>
      this.loadEmployees()
    );
    this.destroyRef.onDestroy(() => subscription.unsubscribe());
  }

  loadEmployees() {
    this.employeesService
      .getEmployees({
        page: this.paginator.pageIndex,
        size: this.paginator.pageSize,
      })
      .subscribe((res) => {
        this.paginator.length = res.itemsTotalCount;
        this.employeesDataSource.data = res.items;
      });
  }

  onUpdateEmp(emp: Employee) {
    this.employeesService.selectedEmployeeForUpdate$.next(emp);
  }

  onDeleteEmp(empId: number) {
    this.employeesService
      .deleteEmployee(empId)
      .subscribe(() => this.loadEmployees());
  }
}
