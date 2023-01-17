import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { IDepartment, ISchool } from '@core/interfaces';
import { ApiService } from '@core/services';
import { ToastrService } from 'ngx-toastr';
import { DepartmentFacade } from '../../+state/department.facade';
import { SchoolFacade } from '../../../school/+state/school.facade';

@Component({
  selector: 'app-department-editor',
  templateUrl: './department-editor.component.html',
  styleUrls: ['./department-editor.component.scss'],
})
export class DepartmentEditorComponent implements OnInit {
  form: FormGroup = new FormGroup({});
  constructor(
    @Inject(MAT_DIALOG_DATA)
    public data: IDepartment,
    private fb: FormBuilder,
    public facade: DepartmentFacade,
    public schoolFacade: SchoolFacade,
    private dialog: MatDialog,
    private apiService: ApiService,
    private toastr: ToastrService
  ) {}

  ngOnInit(): void {
    this.initForm();
    this.schoolFacade.fetchAll();
  }

  initForm() {
    this.form = this.fb.group({
      name: ['', Validators.required],
      schoolId: ['', Validators.required],
      school: [''],
    });
    if (this.data) {
      this.form.patchValue(this.data);
    }
  }

  patchSchool(val: any) {
    this.schoolFacade.schools$.subscribe((schools) => {
      if(this.data) {
        let school: ISchool | any = schools.find(
          (obj) => obj.id == val
        );
        this.form.get('school')?.patchValue(school);  
      } else {
        this.form.get('school')?.patchValue({id:0,name:""}); 
      }   
    });
  }

  handleSubmit() {
    this.patchSchool(this.form.get('schoolId')?.value);
    if(this.form.valid) {
      this.facade.isProcessing(true);
      if (this.data) {
        this.apiService.put(`/Departments/${this.data?.id}`, {id:this.data?.id, ...this.form.value}).subscribe(response=> {
          this.facade.isProcessing(false);
          this.facade.fetchAll();
          this.dialog.closeAll();
          this.toastr.success(`Data was updated successfully`,`Update Success`)
        })
      } else {
        this.apiService.post(`/Departments`, this.form.value).subscribe(response=> {
          this.facade.isProcessing(false);
          this.facade.fetchAll();
          this.dialog.closeAll();
          this.toastr.success(`Data was created successfully`,`Create Success`)
        })
      }
    }
  }
}
