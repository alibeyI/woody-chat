import { Component, OnInit } from '@angular/core';
import { MessageService } from './components/services/message.service';

@Component({
  selector: 'app-chat',
  templateUrl: './chat.component.html',
  styleUrls: ['./chat.component.scss'],
})
export class ChatComponent implements OnInit {
  messageFlag=true;
  toMessage;
  constructor(private service: MessageService ) {
     this.service.event.subscribe((num) => {
       num !== null ? (this.toMessage = true) : (this.toMessage = false);
     });
  }

  ngOnInit(): void {
    console.log(this.toMessage);
  }
  
  
}
