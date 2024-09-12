import {
  Component,
  DestroyRef,
  EventEmitter,
  Input,
  OnInit,
  Output,
} from '@angular/core';
import { Employee } from '../../../models/employees.model';
import { EmployeesService } from '../../../services/employees.service';

@Component({
  selector: 'app-update-employee',
  templateUrl: './update-employee.component.html',
  styleUrl: './update-employee.component.scss',
})
export class UpdateEmployeeComponent implements OnInit {
  employee: Employee | null = null;
  @Output() updated = new EventEmitter();

  constructor(
    private employeesService: EmployeesService,
    private destroyRef: DestroyRef
  ) {}

  ngOnInit() {
    const subscription =
      this.employeesService.selectedEmployeeForUpdate$.subscribe(
        (emp) => (this.employee = emp)
      );
    this.destroyRef.onDestroy(() => subscription.unsubscribe());
  }

  onUpdate() {
    if (this.employee) {
      this.employeesService.updateEmployee(this.employee).subscribe(() => {
        this.employeesService.selectedEmployeeForUpdate$.next(null);
        this.updated.emit();
      });
    }
  }

  onCancel() {
    this.employeesService.selectedEmployeeForUpdate$.next(null);
  }
}
