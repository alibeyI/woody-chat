import { Component, OnInit, Pipe } from '@angular/core';
import { MessageService } from '../services/message.service';
import { ChatData } from '../../../../assets/chatdata';
import { Subscription } from 'rxjs';
import { DomSanitizer } from '@angular/platform-browser';
@Component({
  selector: 'app-message',
  templateUrl: './message.component.html',
  styleUrls: ['./message.component.scss'],
})
export class MessageComponent implements OnInit {
  idOfMessageData = 0;
  messageData;
  str = '';
  chats;
  search = false;
  chatType = [];
  openDetails = false;
  subscription: Subscription;
  width;
  ChatHider;

  constructor(
    private service: MessageService,
    private sanitizer: DomSanitizer
  ) {
    this.width = window.innerWidth;
    this.sanitizer.bypassSecurityTrustHtml(this.chats)
  }

  ngOnInit() {
    this.callServiceOfId();
    window.scrollTo(0, 1000);
  }
  callServiceOfId() {
    this.subscription = this.service.event.subscribe((num) => {
      this.idOfMessageData = num;
      console.log(num);
      this.getMessages(this.idOfMessageData);
    });
  }
  addItem(newItem: string) {
    console.log(newItem);
  }
  openProfileDetail() {
    this.openDetails = !this.openDetails;
    if (this.width < 700) {
      this.ChatHider = !this.ChatHider;
    }
  }
  getMessages(id) {
    console.log(id, 'asdasd');

    for (let i = 0; i < ChatData.length; i++) {
      console.log(ChatData[i].id);
      if (ChatData[i].id === id) {
        this.messageData = ChatData[i].data;
        this.messageData.forEach((chat) => {
          console.log(chat.msg.message);

          this.chatType.push(chat.from.type);
          this.str +=
            '<div class="chat-container-' +
            chat.from.type +
            '">' +
            '<div class="' +
            chat.from.type +
            '">' +
            '<p>' +
            chat.msg.message +
            '</p>' +
            '</div>' +
            '</div>';
        });
        console.log(this.chatType);
      }
    }
    this.chats = this.str;
    console.log(this.str);
  }
  goBackToMessages() {
    console.log('back');
    if (this.width < 700) {
      var messageBox = document.getElementById('messagebox');
      messageBox.style.display = 'none';
      var messagesBox = document.getElementById('messagesbox');
      messagesBox.style.display = 'block';
      this.ChatHider = false;
      this.openDetails = false;
    }
  }
  ngOnDestroy() {
    // unsubscribe to ensure no memory leaks
    // this.subscription.unsubscribe();
  }
}
