import { IStudent } from '@core/interfaces';
import { createReducer, on } from '@ngrx/store';
import { isLoading, isProcessing, loadAllFailure, loadAllSuccess } from './student.action';


export interface IStudentState {
  isLoading: boolean;
  isProcessing: boolean;
  students: IStudent[],
}

export const initialState: IStudentState = {
  isLoading: false,
  isProcessing: false,
  students: [],
};

export const studentReducer = createReducer(
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
    students: action.students,
    isLoading: false
  })),
  on(loadAllFailure, (state, action) => ({
    ...state,
    error: action.error,
    isLoading: false
  }))

);
