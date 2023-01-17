import { Component, Inject, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { IStudent } from '@core/interfaces';

@Component({
  selector: 'app-student-viewer',
  templateUrl: './student-viewer.component.html',
  styleUrls: ['./student-viewer.component.scss']
})
export class StudentViewerComponent implements OnInit {

  constructor(
    @Inject(MAT_DIALOG_DATA) 
    public data: IStudent | any,
  ) { }

  ngOnInit(): void {
  }

}
