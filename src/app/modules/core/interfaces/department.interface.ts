import { ISchool } from "./school.interface";

export interface IDepartment {
    id: number;
    name: string;
    schoolId: number;
    school: ISchool;
  }
  