import { Component } from '@angular/core';
import { IonContent, IonHeader, IonTitle, IonToolbar } from "@ionic/angular/standalone";

@Component({
  selector: 'app-chat',
  templateUrl: './chat.component.html',
  styleUrls: ['./chat.component.scss'],
  standalone: true,
  imports: [
    IonHeader,
    IonTitle,
    IonToolbar,
    IonContent
  ]
})
export class ChatComponent{
  constructor(
  ) { }


  ionViewWillEnter(): void {
  }
}
