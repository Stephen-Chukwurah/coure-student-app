import { IStudent } from '@core/interfaces';
import { createAction, props } from '@ngrx/store';

export const loadAll = createAction('[Student] Load');
export const loadAllSuccess = createAction('[Student] Load Success', props<{ students: IStudent[] }>());
export const loadAllFailure = createAction('[Student] Load Failure', props<{ error: any }>());

export const isLoading = createAction('[Student] Is Loading', props<{ payload: boolean }>());
export const isProcessing = createAction('[Student] Is Processing', props<{ payload: boolean }>());

