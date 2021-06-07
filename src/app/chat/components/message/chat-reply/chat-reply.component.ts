import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { ChatData } from '../../../../../assets/chatdata';

@Component({
  selector: 'app-chat-reply',
  templateUrl: './chat-reply.component.html',
  styleUrls: ['./chat-reply.component.scss'],
})
export class ChatReplyComponent implements OnInit {
  @Output() reply = new EventEmitter<string>();
  replyTo = 'me';
  chatDat;
  constructor() {}

  ngOnInit(): void {
    this.chatDat = ChatData;
  }
  sendTo(value: string) {
    this.reply.emit(value);
    console.log(value);
    
  }
}
