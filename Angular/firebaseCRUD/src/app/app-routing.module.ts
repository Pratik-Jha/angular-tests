import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddStudentComponent } from './Module/Student/add-student/add-student.component';
import { StudentDeatilsComponent } from './Module/Student/student-deatils/student-deatils.component';

const routes: Routes = [
  {path:"getAll",component:StudentDeatilsComponent},
  {path:"addStudent",component:AddStudentComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
