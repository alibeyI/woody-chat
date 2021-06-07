import {Component, OnInit} from '@angular/core';
import {ActionModalService} from './services/action-modal.service';

@Component({
  selector: 'app-action-modal',
  templateUrl: './action-modal.component.html',
  styleUrls: ['./action-modal.component.css']
})
export class ActionModalComponent implements OnInit {
  showActionModal;
  data: {text: string, type: string, confirmFunction: any, cancelFunction: any};
  constructor(public actionModalService: ActionModalService) {
  }

  ngOnInit() {
    this.actionModalService.modalData.subscribe((sb) => {
      this.data = sb;
      this.showActionModal = true;

    });
  }

  close() {
    this.actionModalService.isBackdropActive = false;
    this.showActionModal = false;
  }
}
