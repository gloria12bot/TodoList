import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TasksComponent } from './tasks/tasks.component';
import { UsersComponent } from './users/users.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatStepperModule } from '@angular/material/stepper';
import { HttpClientModule } from '@angular/common/http';
import { MatTableModule } from '@angular/material/table';
import { MatMenuModule } from '@angular/material/menu';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatDialogModule } from '@angular/material/dialog';
import { AddUserComponent } from './users/add-user/add-user.component';
import { MatFormFieldModule } from '@angular/material/form-field';
import {MatProgressBarModule} from '@angular/material/progress-bar';
import {MatProgressSpinnerModule} from '@angular/material/progress-spinner';
import {MatInputModule} from '@angular/material/input'
import { EditUserComponent } from './users/edit-user/edit-user.component';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { ViewTaksComponent } from './users/view-taks/view-taks.component';

@NgModule({
  declarations: [
    AppComponent,
    UsersComponent,
    TasksComponent,
    AddUserComponent,
    EditUserComponent,
    ViewTaksComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatStepperModule,
    HttpClientModule,
    MatTableModule,
    MatMenuModule,
    MatButtonModule,
    MatCardModule,
    MatIconModule,
    MatPaginatorModule,
    MatDialogModule,
    ReactiveFormsModule,
    FormsModule,
    MatFormFieldModule,    MatProgressBarModule,
    MatProgressSpinnerModule,
    MatInputModule
  ],
  providers: [],
  bootstrap: [AppComponent],
  entryComponents: [AddUserComponent],
})
export class AppModule {}
