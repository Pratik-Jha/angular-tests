import { Component, OnInit } from '@angular/core';
import { redirectAlert } from 'src/app/auth/redirect/redirect-response.guard';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-my-account',
  templateUrl: './my-account.component.html',
  styleUrls: ['./my-account.component.css']
})
export class MyAccountComponent implements OnInit,redirectAlert {

  constructor() { }
  confirm(): boolean {
    return confirm("Are you sure you want to navigate");
    // let val : false;
    // Swal.fire({
    //   title: 'Are you sure you want to navigate?',
    //   // text: "You won't be able to revert this!",
    //   icon: 'warning',
    //   showCancelButton: true,
    //   confirmButtonColor: '#3085d6',
    //   cancelButtonColor: '#d33',
    //   confirmButtonText: 'Yes'
    // }).then((result) => {
    //   if (result.isConfirmed) {
    //     return confirm();
    //   }
    // })
    // console.log(val);
  }

  ngOnInit(): void {
  }

}
