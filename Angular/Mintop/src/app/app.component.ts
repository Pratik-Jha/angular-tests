import { Component, OnInit } from '@angular/core';
import { UserListService } from './core/services/users/user-list.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  _title = 'Demo';
  _userArray = [];



  constructor(private userService: UserListService) {

  }

  ngOnInit(): void {
    this.userService.getUsers().subscribe((response) => {
      // console.log(response);
      this._userArray = response["data"];
      // console.log(this._userArray)
    })
  }

}

