import { DOCUMENT } from '@angular/common';
import { Inject } from '@angular/core';
import { Component, OnInit, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { Service } from 'src/services/base.service';
import { AddUserComponent } from './add-user/add-user.component';
import { EditUserComponent } from './edit-user/edit-user.component';
import { ViewTaksComponent } from './view-taks/view-taks.component';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css'],
})
export class UsersComponent implements OnInit {
  users: any;
  displayedColumns: string[] = ['id', 'firstname', 'lastname', 'actions'];
  @ViewChild(MatPaginator) paginator: MatPaginator;

  constructor(
    private service: Service,
    private dialog: MatDialog,
    @Inject(DOCUMENT) private _document: Document
  ) {}

  ngOnInit() {
    this.getUsers();
  }
  getUsers() {
    this.service.getUsers().subscribe((users) => {
      this.users = new MatTableDataSource<any>(users);
      this.users.paginator = this.paginator;
    });
  }
  onAddUser(e: { stopPropagation: () => void }) {
    e.stopPropagation();
    this.dialog.open(AddUserComponent, {
      height: 'auto',
      width: 'auto',
    });
  }
  onDeleteUser(id: number) {
    this.service.deleteUser(id).subscribe(
      () => this._document.defaultView.location.reload(),
      (error) => error
    );
  }
  onEditUser(e: any, user: any) {
    this.dialog.open(EditUserComponent, {
      data: { user: user },
      height: 'auto',
      width: 'auto',
    });
  }
  onViewTasks(e: any, user: any){
    this.dialog.open(ViewTaksComponent, {
      data: { user: user },
      height: 'auto',
      width: 'auto',
    });
  }
}
