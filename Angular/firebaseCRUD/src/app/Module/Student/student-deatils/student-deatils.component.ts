import { Component, OnInit } from '@angular/core';
import { CrudService } from 'src/app/services/crud.service';

@Component({
  selector: 'app-student-deatils',
  templateUrl: './student-deatils.component.html',
  styleUrls: ['./student-deatils.component.css']
})
export class StudentDeatilsComponent implements OnInit {
  student:any;
  constructor(private _crudService:CrudService) { }

  ngOnInit(): void {
    this._crudService.getAllData().subscribe(data=>{
      this.student = data.map(val=>{
        return{
          id: val.payload.doc.id,
          Name: val.payload.doc.data()["Name"],
          Id: val.payload.doc.data()["Id"],
          Contact: val.payload.doc.data()["Contact"],
          isedit:false
        }
      })
    })
  }

  updateStudent(record){
    record.isedit=true;
  }

}
