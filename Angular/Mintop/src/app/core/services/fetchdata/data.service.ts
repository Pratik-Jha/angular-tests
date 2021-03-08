import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  private _message = new BehaviorSubject<any>('');
  _cruiesData = this._message.asObservable();

  changeMessage(message: any) {
    this._message.next(message)
  }

  constructor() { }
}
