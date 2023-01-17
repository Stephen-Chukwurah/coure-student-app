import { Component, Inject, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { IDepartment } from '@core/interfaces';

@Component({
  selector: 'app-department-viewer',
  templateUrl: './department-viewer.component.html',
  styleUrls: ['./department-viewer.component.scss']
})
export class DepartmentViewerComponent implements OnInit {

  constructor(
    @Inject(MAT_DIALOG_DATA) 
    public data: IDepartment | any,
  ) { }

  ngOnInit(): void {
  }

}
