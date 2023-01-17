import { ISchool } from '@core/interfaces';
import { createAction, props } from '@ngrx/store';

export const loadAll = createAction('[School] Load');
export const loadAllSuccess = createAction('[School] Load Success', props<{ schools: ISchool[] }>());
export const loadAllFailure = createAction('[School] Load Failure', props<{ error: any }>());

export const create = createAction('[School] Create', props<{ payload: ISchool }>());
export const createSuccess = createAction('[School] Create Success');
export const createFailure= createAction('[School] Create Failure', props<{ error: any }>());

export const update = createAction('[School] Update', props<{ payload: { data: ISchool, id: any } }>());
export const updateSuccess = createAction('[School] Update Success');
export const updateFailure = createAction('[School] Update Failure', props<{ error: any }>());

export const destroy = createAction('[School] Destroy', props<{ payload: ISchool }>());
export const destroySuccess = createAction('[School] Destroy Success');
export const destroyFailure = createAction('[School] Destroy Failure', props<{ error: any }>());

export const isLoading = createAction('[School] Is Loading', props<{ payload: boolean }>());
export const isProcessing = createAction('[School] Is Processing', props<{ payload: boolean }>());

