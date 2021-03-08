import { Component, Input, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { DataService } from 'src/app/core/services/fetchdata/data.service';

@Component({
  selector: 'app-registration-details',
  templateUrl: './registration-details.component.html',
  styleUrls: ['./registration-details.component.css']
})
export class RegistrationDetailsComponent implements OnInit {

  constructor(private _data: DataService) { }
  @Input() dataRecive:any;
  subscription: Subscription;

  ngOnInit(): void {
    this.subscription = this._data._cruiesData.subscribe(dataRecive => this.dataRecive = dataRecive);
    console.log(this.dataRecive);
  }

}
