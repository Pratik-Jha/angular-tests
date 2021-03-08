import { Component, OnInit } from '@angular/core';
import { UserListService } from '../core/services/users/user-list.service';
import { redirectAlert } from '../auth/redirect/redirect-response.guard';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit,redirectAlert {
  _userArray=[];
  title="Home Page";
  constructor(private service: UserListService) { }

  ngOnInit(): void {
    this.service.getUsers().subscribe(respose =>{
      this._userArray = respose["data"];
      console.log(this._userArray);
    })
  }
  confirm(): boolean{
    return confirm("Are you sure you want to navigate.");
  }

}
