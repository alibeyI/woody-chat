import { Component, OnInit } from '@angular/core';
import { ResizedEvent } from 'angular-resize-event';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  title = 'woody-chat';
  width: number;
  height: number;
  ngOnInit(){
 
  }
}
