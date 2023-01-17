import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ActionMenu, ActionMenuEnum } from '@core/constants';
import { IDepartment } from '@core/interfaces';
import { ApiService } from '@core/services';
import { ConfirmDialogComponent } from '@shared/ui';
import { ToastrService } from 'ngx-toastr';
import { DepartmentFacade } from './+state/department.facade';
import { DepartmentEditorComponent } from './forms/department-editor/department-editor.component';
import { DepartmentViewerComponent } from './forms/department-viewer/department-viewer.component';

@Component({
  selector: 'app-department',
  templateUrl: './department.component.html',
  styleUrls: ['./department.component.scss'],
})
export class DepartmentComponent implements OnInit {
  ActionMenu = ActionMenu;
  ActionMenuEnum = ActionMenuEnum;
  displayedColumns: Array<{ field: string; label: string }> = [
    { field: 'name', label: 'Department Name' },
  ];

  constructor(
    public facade: DepartmentFacade,
    private dialog: MatDialog,
    private apiService: ApiService,
    private toastr: ToastrService
  ) {}

  ngOnInit(): void {
    this.facade.fetchAll();
  }

  ngAfterViewInit() {}

  showEditor(data: IDepartment | null) {
    this.dialog.open(DepartmentEditorComponent, {
      data: data,
      width: '500px',
    });
  }

  showViewer(data: IDepartment | null) {
    this.dialog.open(DepartmentViewerComponent, {
      data: data,
      width: '400px',
    });
  }

  showEraser(data: IDepartment | null) {
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
          .delete(`/Departments/${result?.record?.id}`)
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
