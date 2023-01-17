import { IDepartment } from "./department.interface";

export interface IStudent {
  id?: number;
  address?: string;
  dateOfBirth?: string;
  departmentId?: string;
  email?: string;
  firstName?: string;
  lastName?: string;
  phoneNumber?: string;
  title?: string;
  department?: IDepartment;
}
