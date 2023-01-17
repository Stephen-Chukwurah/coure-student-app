import { createSelector, createFeatureSelector } from '@ngrx/store';
import { ISchoolState } from './school.reducer';

export const getState = createFeatureSelector<ISchoolState>('school');

export const selectSchool = createSelector(
  getState,
  (state: ISchoolState) => state.schools
);
export const selectIsLoading = createSelector(
  getState,
  (state: ISchoolState) => state.isLoading
);
export const selectIsProcessing = createSelector(
  getState,
  (state: ISchoolState) => state.isProcessing
);
