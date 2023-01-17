import { Component, EventEmitter, Input, OnChanges, OnInit, Output, SimpleChanges, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';

@Component({
  selector: 'app-data-grid',
  templateUrl: './data-grid.component.html',
  styleUrls: ['./data-grid.component.scss']
})
export class DataGridComponent implements OnInit, OnChanges {
  @Input() data: any; 
  @Input() displayedColumns: any[] = []; 
  @Input() actionMenu: any[] = []; 
  @Output() onActionClicked = new EventEmitter<any>();
  @ViewChild(MatPaginator) paginator: MatPaginator | any;

  columns: string[] = [];
  dataSource: any; // = new MatTableDataSource<IStudent>(ELEMENT_DATA);

  constructor() { }

  ngOnChanges(changes: SimpleChanges): void {    
    if(changes['data']) {
      this.dataSource = new MatTableDataSource<any>(this.data);
      this.dataSource.paginator = this.paginator;
    }
  }

  ngOnInit(): void {
    this.columns = this.displayedColumns.map(col=>col.field);
    this.columns.push('action')
  }

  handleActionClicked(event: any, data: any) {    
    this.onActionClicked.emit({action: event, data: data})
  }

}
