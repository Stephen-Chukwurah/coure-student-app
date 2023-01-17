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
  loadAll,
  loadAllFailure,
  loadAllSuccess,
} from './department.action';
import { DepartmentFacade } from './department.facade';

@Injectable()
export class DepartmentEffects {
  loadallDepartment$ = createEffect(() =>
    this.actions$.pipe(
      ofType(loadAll),
      exhaustMap((action) =>
        this.apiService.get(`/Departments`).pipe(
          map((response) => loadAllSuccess({ departments: response })),
          catchError((error) => of(loadAllFailure({ error })))
        )
      )
    )
  );

  constructor(private actions$: Actions, private apiService: ApiService, private facade: DepartmentFacade) {}
}
