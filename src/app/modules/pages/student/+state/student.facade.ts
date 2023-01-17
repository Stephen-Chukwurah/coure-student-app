import { Injectable } from '@angular/core';
import { select, Store } from '@ngrx/store';
import { isLoading, isProcessing, loadAll } from './student.action';
import { selectIsLoading, selectIsProcessing, selectStudent } from './student.selector';

@Injectable()
export class StudentFacade {
  students$ = this.store.pipe(select(selectStudent));
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
