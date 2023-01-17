import { Injectable } from '@angular/core';
import { ApiService } from '@core/services';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { of } from 'rxjs';
import {
  map,
  mergeMap,
  catchError,
  exhaustMap,
  switchMap,
} from 'rxjs/operators';
import {
  create,
  createFailure,
  createSuccess,
  destroy,
  destroyFailure,
  destroySuccess,
  loadAll,
  loadAllFailure,
  loadAllSuccess,
  update,
  updateFailure,
  updateSuccess,
} from './school.action';

@Injectable()
export class SchoolEffects {
  loadallSchool$ = createEffect(() =>
    this.actions$.pipe(
      ofType(loadAll),
      exhaustMap((action) =>
        this.apiService.get(`/Schools`).pipe(
          map((response) => loadAllSuccess({ schools: response })),
          catchError((error) => of(loadAllFailure({ error })))
        )
      )
    )
  );

  createSchool$ = createEffect(() =>
    this.actions$.pipe(
      ofType(create),
      exhaustMap((action) =>
        this.apiService.post(`/Schools`, action.payload).pipe(
          switchMap(async (response) => createSuccess()),
          switchMap(async (response) => loadAll()),
          catchError(error => of(createFailure({ error })))
        )
      )
    )
  );

  updateSchool$ = createEffect(() =>
    this.actions$.pipe(
      ofType(update),
      exhaustMap((action) =>
        this.apiService.put(`/Schools/${action?.payload?.id}`, action.payload.data).pipe(
          switchMap(async (response) => updateSuccess()),
          switchMap(async (response) => loadAll()),
          catchError(error => of(updateFailure({ error })))
        )
      )
    )
  );

  destroySchool$ = createEffect(() =>
  this.actions$.pipe(
    ofType(destroy),
    exhaustMap((action) =>
      this.apiService.delete(`/Schools/${action?.payload?.id}`).pipe(
        switchMap(async (response) => destroySuccess()),
        switchMap(async (response) => loadAll()),
        catchError(error => of(destroyFailure({ error })))
      )
    )
  )
);

  constructor(private actions$: Actions, private apiService: ApiService) {}
}
