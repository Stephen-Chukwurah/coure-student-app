import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ActionMenu, ActionMenuEnum } from '@core/constants';
import { IStudent } from '@core/interfaces';
import { ApiService } from '@core/services';
import { ConfirmDialogComponent } from '@shared/ui';
import { ToastrService } from 'ngx-toastr';
import { StudentFacade } from './+state/student.facade';
import { StudentEditorComponent } from './forms/student-editor/student-editor.component';
import { StudentViewerComponent } from './forms/student-viewer/student-viewer.component';

@Component({
  selector: 'app-student',
  templateUrl: './student.component.html',
  styleUrls: ['./student.component.scss'],
})
export class StudentComponent implements OnInit {
  ActionMenu = ActionMenu;
  ActionMenuEnum = ActionMenuEnum;
  displayedColumns: Array<{ field: string; label: string }> = [
    { field: 'title', label: 'Title' },
    { field: 'firstName', label: 'First Name' },
    { field: 'lastName', label: 'Last Name' },
    { field: 'phoneNumber', label: 'Phone Number' },
    { field: 'email', label: 'Email' },
    { field: 'address', label: 'Address' },
    { field: 'dateOfBirth', label: 'Date Of Birth' },
  ];

  constructor(
    public dialog: MatDialog,
    public facade: StudentFacade,
    private apiService: ApiService,
    private toastr: ToastrService
  ) {}

  ngOnInit(): void {
    this.facade.fetchAll();
  }

  ngAfterViewInit() {}

  showEditor(data: IStudent | null) {
    this.dialog.open(StudentEditorComponent, {
      data: data,
      width: '500px',
    });
  }

  showViewer(data: IStudent | null) {
    this.dialog.open(StudentViewerComponent, {
      data: data,
      width: '400px',
    });
  }

  showEraser(data: IStudent | null) {
    this.dialog
      .open(ConfirmDialogComponent, {
        data: {
          caption: `Are you sure you want to delete this record ${data?.firstName} ${data?.firstName}`,
          record: data,
        },
        width: '600px',
      })
      .afterClosed()
      .subscribe((result) => {
        this.apiService
          .delete(`/Students/${result?.record?.id}`)
          .subscribe((response) => {
            this.facade.isProcessing(false);
            this.facade.fetchAll();
            this.dialog.closeAll();
            this.toastr.success(
              `Data was deleted successfully`,
              `Delete Success`
            );
          });
      });
  }

  handleActionClicked($event: { action: any; data: any }) {
    switch ($event?.action?.type) {
      case ActionMenuEnum.View:
        this.showViewer($event?.data);
        break;
      case ActionMenuEnum.Edit:
        this.showEditor($event?.data);
        break;
      case ActionMenuEnum.Delete:
        this.showEraser($event?.data);
        break;

      default:
        break;
    }
  }
}
