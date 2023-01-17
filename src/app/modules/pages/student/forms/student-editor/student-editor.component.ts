import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialog, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { IDepartment, IStudent } from '@core/interfaces';
import { ApiService } from '@core/services';
import { ToastrService } from 'ngx-toastr';
import { StudentFacade } from '../../+state/student.facade';
import { DepartmentFacade } from '../../../department/+state/department.facade';

@Component({
  selector: 'app-student-editor',
  templateUrl: './student-editor.component.html',
  styleUrls: ['./student-editor.component.scss'],
})
export class StudentEditorComponent implements OnInit {
  form: FormGroup = new FormGroup({});
  constructor(
    @Inject(MAT_DIALOG_DATA)
    public data: IStudent,
    private fb: FormBuilder,
    public facade: StudentFacade,
    public departmentFacade: DepartmentFacade,
    private dialog: MatDialog,
    private apiService: ApiService,
    private toastr: ToastrService
  ) {}

  ngOnInit(): void {
    this.initForm();
    this.departmentFacade.fetchAll();
  }

  initForm() {
    this.form = this.fb.group({
      firstName: ['', Validators.required],
      lastName: ['', Validators.required],
      title: ['', Validators.required],
      phoneNumber: ['', Validators.required],
      email: ['', Validators.required],
      address: ['', Validators.required],
      dateOfBirth: ['', Validators.required],
      departmentId: ['', Validators.required],
      department: [''],
    });
    if (this.data) {
      this.form.patchValue(this.data);
    }
  }

  patchDepartment(val: any) {
    if (this.data) {
      this.departmentFacade.departments$.subscribe((departments) => {
        let department: IDepartment | any = departments.find(
          (obj) => obj.id == val
        );
        // this.form.get('department')?.patchValue(department);
        this.form.get('department')?.patchValue({
          id: department?.id,
          name: department?.name,
          schoolId: department?.schoolId,
          school: {
            id: 0,
            name: 'string',
          },
        });
      });
    } else {
      this.form.get('department')?.patchValue({
        id: 0,
        name: 'string',
        schoolId: 0,
        school: {
          id: 0,
          name: 'string',
        },
      });
    }
  }

  handleSubmit() {
    this.patchDepartment(this.form.get('departmentId')?.value);
    if (this.form.valid) {
      this.facade.isProcessing(true);
      if (this.data) {
        this.apiService
          .put(`/Students/${this.data?.id}`, {
            id: this.data?.id,
            ...this.form.value,
          })
          .subscribe((response) => {
            this.facade.isProcessing(false);
            this.facade.fetchAll();
            this.dialog.closeAll();
            this.toastr.success(
              `Data was updated successfully`,
              `Update Success`
            );
          });
      } else {
        this.apiService
          .post(`/Students`, this.form.value)
          .subscribe((response) => {
            this.facade.isProcessing(false);
            this.facade.fetchAll();
            this.dialog.closeAll();
            this.toastr.success(
              `Data was created successfully`,
              `Create Success`
            );
          });
      }
    }
  }
}
