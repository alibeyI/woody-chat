import {Injectable} from '@angular/core';
import {Subject} from 'rxjs';

@Injectable({
  'providedIn': 'root'
})
export class ActionModalService {
  public modalData = new Subject<{text: string, type: string, confirmFunction: any, cancelFunction: any}>();
  public isBackdropActive: boolean;

  constructor() {
  }

  open(type = 'info', text = '', confirmFunction = () => {}, cancelFunction = () => {}) {
    this.modalData.next({
      text,
      type,
      confirmFunction,
      cancelFunction
    });
    this.isBackdropActive = true;
  }
}


