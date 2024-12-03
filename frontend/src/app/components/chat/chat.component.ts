import { Component, OnInit } from '@angular/core';
import { TitleService } from 'src/app/services/shared/title.service';

@Component({
  selector: 'app-chat',
  templateUrl: './chat.component.html',
  styleUrls: ['./chat.component.scss'],
  standalone: true
})
export class ChatComponent{
  title: string = 'Chat';

  constructor(
    private titleService: TitleService
  ) { }


  ionViewWillEnter(): void {
    this.titleService.setTitle(this.title);
  }
}
