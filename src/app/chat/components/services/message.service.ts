import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class MessageService {
  private sendNum = new BehaviorSubject<number | null>(null);
  event = this.sendNum.asObservable();
  constructor() {}

  update(num) {
    this.sendNum.next(num);
    console.log(num);
  }
}
