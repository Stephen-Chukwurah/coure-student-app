import { createSelector, createFeatureSelector } from '@ngrx/store';
import { IDepartmentState } from './department.reducer';

export const getState = createFeatureSelector<IDepartmentState>('department');

export const selectDepartment = createSelector(
  getState,
  (state: IDepartmentState) => state.departments
);
export const selectIsLoading = createSelector(
  getState,
  (state: IDepartmentState) => state.isLoading
);
export const selectIsProcessing = createSelector(
  getState,
  (state: IDepartmentState) => state.isProcessing
);
