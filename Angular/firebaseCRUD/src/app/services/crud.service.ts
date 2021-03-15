import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';

@Injectable({
  providedIn: 'root'
})
export class CrudService {

  constructor(private fireservice:AngularFirestore) { }

  addStudent(data){
    this.fireservice.collection("Students").add(data);
  }

  getAllData(){
    return this.fireservice.collection("Students").snapshotChanges();
  }
}
