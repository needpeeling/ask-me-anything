import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-chat',
  templateUrl: './chat.component.html',
  styleUrls: ['./chat.component.scss'],
  standalone: true
})
export class ChatComponent{
  title: string = 'Chat';

  constructor(
  ) { }


  ionViewWillEnter(): void {
  }
}
