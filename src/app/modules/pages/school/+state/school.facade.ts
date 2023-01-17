import { Injectable } from '@angular/core';
import { ISchool } from '@core/interfaces';
import { select, Store, Action } from '@ngrx/store';
import { create, destroy, isLoading, isProcessing, loadAll, update } from './school.action';
import { selectIsLoading, selectIsProcessing, selectSchool } from './school.selector';

@Injectable({
  providedIn: 'root'
})
export class SchoolFacade {
  schools$ = this.store.pipe(select(selectSchool));
  isLoading$ = this.store.pipe(select(selectIsLoading));
  isProcessing$ = this.store.pipe(select(selectIsProcessing));

  constructor(private readonly store: Store) {}

  fetchAll() {
    this.store.dispatch(loadAll());
  }
  create(data: ISchool) {
    this.store.dispatch(create({ payload: data }));
  }
  update(data: ISchool, id: any) {
    this.store.dispatch(update({ payload: { data:data, id:id }}));
  }
  destroy(data: ISchool) {
    this.store.dispatch(destroy({ payload: data }));
  }

  isLoading(state: boolean) {
    this.store.dispatch(isLoading({ payload: state }));
  }

  isProcessing(state: boolean) {
    this.store.dispatch(isProcessing({ payload: state }));
  }
  
}
