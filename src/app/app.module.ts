import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RegisterComponent } from './register/register.component';
import { LoginComponent } from './login/login.component';
import { AddTaskComponent } from './add-task/add-task.component';
import { ForgetPasswordComponent } from './forget-password/forget-password.component';
import { ListUsersComponent } from './list-users/list-users.component';
import { ViewProfileComponent } from './view-profile/view-profile.component';
import { ListTaskComponent } from './list-task/list-task.component';
import { ChangePasswordComponent } from './change-password/change-password.component';
import { HeaderComponent } from './header/header.component';
import { EditTaskComponent } from './edit-task/edit-task.component';

@NgModule({
  declarations: [
    AppComponent,
    RegisterComponent,
    LoginComponent,
    AddTaskComponent,
    ForgetPasswordComponent,
    ListUsersComponent,
    ViewProfileComponent,
    ListTaskComponent,
    ChangePasswordComponent,
    HeaderComponent,
    EditTaskComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
