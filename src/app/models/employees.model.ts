import { Role } from './auth.model';

export type Employee = {
  id: number;
  name: string;
  email: string;
  phoneNumber: string;
  nationalId: string;
  role: Role;
  hiringDate: Date;
  departmentName: string;
};

export type GetEmployeesOptions = {
  page?: number;
  size?: number;
};

export type UpdateEmployeeReqDto = {
  name?: string;
  email?: string;
  password?: string;
  phoneNumber?: string;
  nationalId?: string;
  hiringDate?: Date;
};
