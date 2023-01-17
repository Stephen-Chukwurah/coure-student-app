import { IDepartment } from '@core/interfaces';
import { createReducer, on } from '@ngrx/store';
import { isLoading, isProcessing, loadAllFailure, loadAllSuccess } from './department.action';


export interface IDepartmentState {
  isLoading: boolean;
  isProcessing: boolean;
  departments: IDepartment[],
}

export const initialState: IDepartmentState = {
  isLoading: false,
  isProcessing: false,
  departments: [],
};

export const departmentReducer = createReducer(
  initialState,
  on(isLoading, (state, action) => ({
    ...state,
    isLoading: action.payload,
  })),
  on(isProcessing, (state, action) => ({
    ...state,
    isProcessing: action.payload,
  })),
  on(loadAllSuccess, (state, action) => ({
    ...state,
    departments: action.departments,
    isLoading: false
  })),
  on(loadAllFailure, (state, action) => ({
    ...state,
    error: action.error,
    isLoading: false
  }))

);
