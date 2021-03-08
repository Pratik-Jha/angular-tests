import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { from, Subscription } from 'rxjs';
import { DataService } from 'src/app/core/services/fetchdata/data.service';
import { RegistrationDetailsComponent } from '../registration-details/registration-details.component';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {
  show: boolean;
  message:string;
  dataArray: any=[];
  subscription: Subscription;
  constructor(private _router:Router,private _data: DataService) { }


  ngOnInit(): void {
  }

  cruiseForm = new FormGroup({
    cruise: new FormGroup({
      Date_of_cruise: new FormControl('', Validators.required),
      no_of_participants: new FormControl('', Validators.required),
      isContactAdd: new FormControl("", Validators.required),
      foodType: new FormGroup({
        breakfast: new FormControl(),
        lunch: new FormControl(),
        dinner: new FormControl(),
      }),
    }),

    firstName: new FormControl(''),
    lastName: new FormControl(''),
    mail: new FormControl(''),
  })

  //This method is call on the submit button and pass the data to the another component.
  /********** input Method ***********/
  // onSubmit(f) { 
  //   this.dataArray.push(f)
  //   console.log("Form Saved.", this.dataArray);
  //   // this._router.navigate(['registration'],this.dataArray);
  // }

  /********** Service Method ***********/
  onSubmit(f) { 
    this.dataArray.push(f)
    // this.subscription = this._data._cruiesData.subscribe(dataArray => this.dataArray = dataArray)
    this._data.changeMessage(this.dataArray);
    this._router.navigate(['registration']);
  }

  /********** ViewChild Method ***********/
  // @ViewChild(RegistrationDetailsComponent) child;
  // onSubmit(f) { 
  //   this.dataArray.push(f);
  //   // console.log('1',this.dataArray)
  //   // this.subscription = this._data._cruiesData.subscribe(dataArray => this.dataArray = dataArray)
  //   // this._data.changeMessage(this.dataArray);
  //   this.child.dataRecive=this.dataArray;
  //   console.log("Form Saved.", this.dataArray);
  //   this._router.navigate(['registration'],this.dataArray);
  // }

  //This method is used to show the contact form if we select yes in radio button with putting the validation in the respective feild.
  showForm(show: boolean) {
    if (show) {
      this.cruiseForm.get("firstName").setValidators(Validators.required);
      this.cruiseForm.get("firstName").updateValueAndValidity();
      this.cruiseForm.get("lastName").setValidators(Validators.required);
      this.cruiseForm.get("lastName").updateValueAndValidity();
      this.cruiseForm.get("mail").setValidators(Validators.required);
      this.cruiseForm.get("mail").updateValueAndValidity();

      this.show = true;
    }
    else {
      this.cruiseForm.get("firstName").clearValidators();
      this.cruiseForm.get("firstName").updateValueAndValidity();

      this.cruiseForm.get("lastName").clearValidators();
      this.cruiseForm.get("lastName").updateValueAndValidity();

      this.cruiseForm.get("mail").clearValidators();
      this.cruiseForm.get("mail").updateValueAndValidity();

      this.show = false;
    }
  }

  //Here we geting the value from the textbox.
  get fisrtName() { return this.cruiseForm.get("firstName"); }
  get lastName() { return this.cruiseForm.get("lastName"); }
  get mail() { return this.cruiseForm.get("mail"); }


  get no_of_participants() { return this.cruiseForm.get("cruise.no_of_participants"); }
  get foodMain() { return this.cruiseForm.get("cruise.foodType"); }
  get Date_of_cruise() { return this.cruiseForm.get("cruise.Date_of_cruise"); }
  get isContactAdd() { return this.cruiseForm.get("cruise.isContactAdd"); }
}
