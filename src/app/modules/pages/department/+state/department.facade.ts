import { Injectable } from '@angular/core';
import { select, Store } from '@ngrx/store';
import { isLoading, isProcessing, loadAll } from './department.action';
import { selectIsLoading, selectIsProcessing, selectDepartment } from './department.selector';

@Injectable({
  providedIn: 'root'
})
export class DepartmentFacade {
  departments$ = this.store.pipe(select(selectDepartment));
  isLoading$ = this.store.pipe(select(selectIsLoading));
  isProcessing$ = this.store.pipe(select(selectIsProcessing));

  constructor(private readonly store: Store) {}

  fetchAll() {
    this.store.dispatch(loadAll());
  }

  isLoading(state: boolean) {
    this.store.dispatch(isLoading({ payload: state }));
  }

  isProcessing(state: boolean) {
    this.store.dispatch(isProcessing({ payload: state }));
  }
  
}
