import { Component, EventEmitter, Inject, Input, OnInit, Output } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-confirm-dialog',
  templateUrl: './confirm-dialog.component.html',
  styleUrls: ['./confirm-dialog.component.scss']
})
export class ConfirmDialogComponent implements OnInit {

constructor(
  @Inject(MAT_DIALOG_DATA)
  public data: any,
  public dialogRef: MatDialogRef<ConfirmDialogComponent>

) { }

  ngOnInit(): void {
  }

  handleClick(data: any) {
    this.dialogRef.close(data);
  }

}
