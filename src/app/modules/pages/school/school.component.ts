import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ActionMenu, ActionMenuEnum } from '@core/constants';
import { ISchool } from '@core/interfaces';
import { ApiService } from '@core/services';
import { ConfirmDialogComponent } from '@shared/ui';
import { ToastrService } from 'ngx-toastr';
import { SchoolFacade } from './+state/school.facade';
import { SchoolEditorComponent } from './forms/school-editor/school-editor.component';
import { SchoolViewerComponent } from './forms/school-viewer/school-viewer.component';

@Component({
  selector: 'app-school',
  templateUrl: './school.component.html',
  styleUrls: ['./school.component.scss'],
})
export class SchoolComponent implements OnInit {
  ActionMenu = ActionMenu;
  ActionMenuEnum = ActionMenuEnum;
  displayedColumns: Array<{ field: string; label: string }> = [
    { field: 'name', label: 'School Name' },
  ];

  constructor(
    public dialog: MatDialog,
    public facade: SchoolFacade,
    private apiService: ApiService,
    private toastr: ToastrService
  ) {}

  ngOnInit(): void {
    this.facade.fetchAll();
  }

  ngAfterViewInit() {}

  showEditor(data: ISchool | null) {
    this.dialog.open(SchoolEditorComponent, {
      data: data,
      width: '500px',
    });
  }

  showViewer(data: ISchool | null) {
    this.dialog.open(SchoolViewerComponent, {
      data: data,
      width: '400px',
    });
  }

  showEraser(data: ISchool | null) {
    this.dialog
      .open(ConfirmDialogComponent, {
        data: {
          caption: `Are you sure you want to delete this record ${data?.name}`,
          record: data,
        },
        width: '600px',
      })
      .afterClosed()
      .subscribe((result) => {
        this.apiService
          .delete(`/Schools/${result?.record?.id}`)
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
