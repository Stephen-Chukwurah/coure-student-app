import { isDevMode } from '@angular/core';
import {
  ActionReducerMap,
  MetaReducer
} from '@ngrx/store';
import { ISchoolState, schoolReducer } from '@school';
import { IStudentState, studentReducer } from '@student';
import { departmentReducer, IDepartmentState } from '@department';
import { environment } from '@environments/environment';

export interface AppState {
  student: IStudentState;
  department: IDepartmentState;
  school: ISchoolState;
}

export const reducers: ActionReducerMap<AppState> = {
  student: studentReducer,
  department: departmentReducer,
  school: schoolReducer
};

export const metaReducers: MetaReducer<AppState>[] = !environment.production ? [] : [];
