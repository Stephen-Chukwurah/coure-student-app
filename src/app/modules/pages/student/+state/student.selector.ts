import { createSelector, createFeatureSelector } from '@ngrx/store';
import { IStudentState } from './student.reducer';

export const getState = createFeatureSelector<IStudentState>('student');

export const selectStudent = createSelector(
  getState,
  (state: IStudentState) => state.students
);
export const selectIsLoading = createSelector(
  getState,
  (state: IStudentState) => state.isLoading
);
export const selectIsProcessing = createSelector(
  getState,
  (state: IStudentState) => state.isProcessing
);
