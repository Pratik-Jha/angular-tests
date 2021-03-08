import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import 'rxjs/Rx';

@Injectable({
  providedIn: 'root'
})
export class UserListService {

  constructor(private http: HttpClient) { }

  getUsers() {
    try {
     
      return this.http.get("https://reqres.in/api/unknown").map(data => data);
    }
    catch (error) {
      return Observable.throw(error);
    }

  }
}
