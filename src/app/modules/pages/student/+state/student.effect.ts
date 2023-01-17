import { Injectable } from '@angular/core';
import { ApiService } from '@core/services';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { of } from 'rxjs';
import {
  map,
  catchError,
  exhaustMap,
} from 'rxjs/operators';
import {
  loadAll,
  loadAllFailure,
  loadAllSuccess,
} from './student.action';

@Injectable()
export class StudentEffects {
  loadallStudent$ = createEffect(() =>
    this.actions$.pipe(
      ofType(loadAll),
      exhaustMap((action) =>
        this.apiService.get(`/Students`).pipe(
          map((response) => loadAllSuccess({ students: response })),
          catchError((error) => of(loadAllFailure({ error })))
        )
      )
    )
  );

  constructor(private actions$: Actions, private apiService: ApiService) {}
}
