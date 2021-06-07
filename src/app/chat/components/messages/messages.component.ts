import { Component, OnInit } from '@angular/core';
import { chatHistory } from '../../../../assets/chat-history';
import { MessageService } from '../services/message.service';
import { ResizedEvent } from 'angular-resize-event';
@Component({
  selector: 'app-messages',
  templateUrl: './messages.component.html',
  styleUrls: ['./messages.component.scss'],
})
export class MessagesComponent implements OnInit {
  chatHistory;
  openDetail_chat;
  detailTouch;
  width;
  getScreenSize(event?) {
    this.width = window.innerWidth;
    console.log(this.width);
  }
  constructor(private service: MessageService) {
    this.width = window.innerWidth;
    this.getScreenSize()
  }

  ngOnInit(): void {
    this.chatHistory = chatHistory;

    console.log(this.width);
    if (this.goToChat && this.width < 600) {
      // document.getElementById('messagebox').style.display = 'block'
    }
  }

  over(num) {
    this.openDetail_chat = num;
  }
  onDetailClick(num) {
    this.detailTouch = num;
  }
  goToChat($event, index) {
    this.service.update(index);
    // console.log(index);

    if (this.width < 700) {
      var messageBox = document.getElementById('messagebox');
      messageBox.style.display = 'block';
      var messagesBox = document.getElementById('messagesbox');
      messagesBox.style.display = 'none';
    }
  }
  onClickedOutside(e: Event) {
    this.detailTouch = e;
    console.log(e);
  }
}
