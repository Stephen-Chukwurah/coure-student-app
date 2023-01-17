import { ISchool } from '@core/interfaces';
import { createReducer, on } from '@ngrx/store';
import { createFailure, createSuccess, destroyFailure, destroySuccess, isLoading, isProcessing, loadAllFailure, loadAllSuccess, updateFailure, updateSuccess } from './school.action';


export interface ISchoolState {
  isLoading: boolean;
  isProcessing: boolean;
  schools: ISchool[],
}

export const initialState: ISchoolState = {
  isLoading: false,
  isProcessing: false,
  schools: [],
};

export const schoolReducer = createReducer(
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
    schools: action.schools,
    isLoading: false
  })),
  on(loadAllFailure, (state, action) => ({
    ...state,
    error: action.error,
    isLoading: false
  })),

  on(createSuccess, (state, action) => ({
    ...state,
    isProcessing: false
  })),
  on(createFailure, (state, action) => ({
    ...state,
    error: action.error,
    isProcessing: false
  })),

  on(updateSuccess, (state, action) => ({
    ...state,
    isProcessing: false
  })),
  on(updateFailure, (state, action) => ({
    ...state,
    error: action.error,
    isProcessing: false
  })),

  on(destroySuccess, (state, action) => ({
    ...state,
    isProcessing: false
  })),
  on(destroyFailure, (state, action) => ({
    ...state,
    error: action.error,
    isProcessing: false
  })),

);
