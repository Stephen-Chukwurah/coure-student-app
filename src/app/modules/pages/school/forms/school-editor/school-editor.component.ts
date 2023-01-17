import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialog, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { ISchool } from '@core/interfaces';
import { ApiService } from '@core/services';
import { ToastrService } from 'ngx-toastr';
import { SchoolFacade } from '../../+state/school.facade';

@Component({
  selector: 'app-school-editor',
  templateUrl: './school-editor.component.html',
  styleUrls: ['./school-editor.component.scss']
})
export class SchoolEditorComponent implements OnInit {
  form: FormGroup = new FormGroup({});
  constructor(
    @Inject(MAT_DIALOG_DATA)
    public data: ISchool,
    private fb: FormBuilder,
    public facade: SchoolFacade,
    private dialog: MatDialog,
    private apiService: ApiService,
    private toastr: ToastrService
  ) {}

  ngOnInit(): void {
    this.initForm();
  }

  initForm() {
    this.form = this.fb.group({
      name: ['', Validators.required],
    });
    if (this.data) {
      this.form.patchValue(this.data);
    }
  }

  handleSubmit() {
    if(this.form.valid) {
      this.facade.isProcessing(true);
      if (this.data) {
        this.apiService.put(`/Schools/${this.data?.id}`, {id:this.data?.id, ...this.form.value}).subscribe(response=> {
          this.facade.isProcessing(false);
          this.facade.fetchAll();
          this.dialog.closeAll();
          this.toastr.success(`Data was updated successfully`,`Update Success`)
        })
      } else {
        this.apiService.post(`/Schools`, this.form.value).subscribe(response=> {
          this.facade.isProcessing(false);
          this.facade.fetchAll();
          this.dialog.closeAll();
          this.toastr.success(`Data was created successfully`,`Create Success`)
        })
      }
    }
  }
}

