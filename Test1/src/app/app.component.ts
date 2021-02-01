import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Test1';
}

//This function is used to find that the given year is leap year or not.
let leap = function (year) {
  if(((year % 4 == 0) && (year % 100 != 0)) || (year % 400 == 0)){
    return "The Inputed Year Is leap year.";
  }
  else{
    return "The Inputed Year Is Not leap year.";
  }
}
//Calling the function.

console.log(leap(2012));
console.log(leap(2013));

//This function is used to find the length of the String.
let stringLength = function(Text){
  console.log(`The length of the ${Text} is ${Text.length}`)
}

//Calling the function.
stringLength("Pratik");
stringLength("Pratik Jha");