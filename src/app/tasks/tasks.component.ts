import { DOCUMENT } from '@angular/common';
import { Inject } from '@angular/core';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Subscription } from 'rxjs';
import { Service } from 'src/services/base.service';
import { EditUserComponent } from '../edit-user/edit-user.component';
import { TasksComponent } from './tasks/tasks.component';

@Component({
  selector: 'app-add-task',
  templateUrl: './tasks.component.html',
  styleUrls: ['./tasks.component.css'],
})
export class TasksComponent implements OnInit {

  userForm: FormGroup;
  userSubscription: Subscription;
  constructor(
    private dialogRef: MatDialogRef<EditUserComponent>,
    private fb: FormBuilder,
    private service: Service,
    @Inject(DOCUMENT) private _document: Document
  ) {}

  ngOnInit() {
    this.userForm = this.generateForm();
  }
  onCancel(e) {
    e.stopPropagation();
    this.dialogRef.close();
  }
  generateForm() {
    return this.fb.group({
      firstname: new FormControl(''),
      lastname: new FormControl(''),
    });
  }
  onSave(e) {
    e.stopPropagation();
    const task = { ...this.userForm.value };
    console.log(task)
     this.service.addtask( task).subscribe(
     () => this._document.defaultView.location.reload(),
      (error) => error
   );
  }
}
