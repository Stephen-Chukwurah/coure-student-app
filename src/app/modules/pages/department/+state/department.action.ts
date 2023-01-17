import { IDepartment } from '@core/interfaces';
import { createAction, props } from '@ngrx/store';

export const loadAll = createAction('[Department] Load');
export const loadAllSuccess = createAction('[Department] Load Success', props<{ departments: IDepartment[] }>());
export const loadAllFailure = createAction('[Department] Load Failure', props<{ error: any }>());

export const isLoading = createAction('[Department] Is Loading', props<{ payload: boolean }>());
export const isProcessing = createAction('[Department] Is Processing', props<{ payload: boolean }>());

