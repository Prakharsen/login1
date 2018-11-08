import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { RouterModule, Routes } from '@angular/router';
import { AdminComponent } from './admin/admin.component';
import { LoginComponent } from './login/login.component';
import { TeacherComponent } from './teacher/teacher.component';
import { StudentComponent } from './student/student.component';
import { AuthgaurdService } from './authgaurd.service';
import { RestCallingService } from './rest-calling.service';
import { TutorComponent } from './tutor/tutor.component';

const appRoutes: Routes = [
{ path: 'admin/admin', component: AdminComponent},
{ path: 'login/login', canActivate: [AuthgaurdService], component: LoginComponent, children: [
  {
    path: 'teacher/teacher',
    component: TeacherComponent
  },
  {
    path: ':student/student',
    component: StudentComponent
  }
]},
{ path: 'tutor/tutor', component: TutorComponent}
];

@NgModule({
  declarations: [
    AppComponent,
    AdminComponent,
    LoginComponent,
    TeacherComponent,
    StudentComponent,
    TutorComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [AuthgaurdService, RestCallingService],
  bootstrap: [AppComponent]
})
export class AppModule { }

export const routing = RouterModule.forRoot(appRoutes);
