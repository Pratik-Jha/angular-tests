import { Component, OnInit } from '@angular/core'; 
import { FormControl, FormGroup } from '@angular/forms';
import * as CryptoJS from 'crypto-js';

@Component({
  selector: 'app-encryptdecrypt',
  templateUrl: './encryptdecrypt.component.html',
  styleUrls: ['./encryptdecrypt.component.css']
})
export class EncryptdecryptComponent implements OnInit {
  originalValue:string;
  checkValue:string;
  encryptedData:string="";
  secretKey:string="Crack the unique key";

  constructor() { }

  ngOnInit(): void {
  }

  check(){
    if(this.encryptedData){
      this.checkValue=this.encryptedData;
    }
    else{
      this.checkValue=this.originalValue;
      this.encryptedData="";
    }
  }
  
  Encrypt(datatoEncrypt){
    if(datatoEncrypt!==this.encryptedData){
      this.encryptedData = CryptoJS.AES.encrypt(datatoEncrypt,this.secretKey).toString();
      this.check();
      console.log("Original Value after encrypt: ",this.encryptedData);
    }
     
  }
  Decrypt(){
    let bytes = CryptoJS.AES.decrypt(this.encryptedData,this.secretKey);
    this.originalValue = bytes.toString(CryptoJS.enc.Utf8);
    this.check();
    console.log("Original Value after decrypt: ",this.originalValue);
  }

}
