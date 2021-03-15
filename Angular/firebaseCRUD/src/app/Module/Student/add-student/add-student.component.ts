import { Component, OnInit } from '@angular/core';
import { CrudService } from 'src/app/services/crud.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-add-student',
  templateUrl: './add-student.component.html',
  styleUrls: ['./add-student.component.css']
})
export class AddStudentComponent implements OnInit {

  ngOnInit(): void {
  }
  studentID:string;
  studentName:string;
  studentGender:string;
  studentContact:string;
  constructor(private _crudService:CrudService){

  }
  addStudent(){
    let studentData={}
    studentData["Id"]=this.studentID;
    studentData["Name"]=this.studentName;
    studentData["Contact"]=this.studentContact;
    studentData["Id"]=this.studentGender;
    this._crudService.addStudent(studentData);
    Swal.fire({
      position: 'top-end',
      icon: 'success',
      title: 'Student Record Add Successfully.',
      showConfirmButton: false,
      timer: 1500
    })
  }
}
