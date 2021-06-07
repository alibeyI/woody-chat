import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ChatComponent } from './chat/chat.component';
import { MessagesComponent } from './chat/components/messages/messages.component';
import { MessageComponent } from './chat/components/message/message.component';
import { ChatSearchComponent } from './chat/components/message/chat-search/chat-search.component';
import { ChatReplyComponent } from './chat/components/message/chat-reply/chat-reply.component';
import { FormsModule } from '@angular/forms';
import { ProfileInfoComponent } from './chat/components/message/profile-info/profile-info.component';
import { ClickOutsideModule } from 'ng-click-outside';
import { ProfileDetailComponent } from './chat/components/message/profile-detail/profile-detail.component';

@NgModule({
  declarations: [
    AppComponent,
    ChatComponent,
    MessagesComponent,
    MessageComponent,
    ChatSearchComponent,
    ChatReplyComponent,
    ProfileInfoComponent,
    ProfileDetailComponent,
  ],
  
  imports: [BrowserModule, AppRoutingModule, FormsModule, ClickOutsideModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
