import { Component } from '@angular/core';
import { IonAvatar, IonCard, IonCardContent, IonCardHeader, IonCardTitle, IonCardSubtitle, IonIcon, IonButton, IonPopover } from "@ionic/angular/standalone";
import { addIcons } from 'ionicons';
import { flask, help, rocket } from 'ionicons/icons';
import { testAskMe } from 'src/app/data/test/posts';
import { PostAskMe } from 'src/app/types/post';

@Component({
  selector: 'app-ask-me',
  templateUrl: './ask-me.component.html',
  styleUrls: ['./ask-me.component.scss'],
  standalone: true,
  imports: [
    IonPopover, IonIcon, IonCardSubtitle, IonCardTitle, IonButton, IonCardHeader, IonAvatar, IonCard, IonCardContent
  ]
})
export class AskMeComponent {
  posts: PostAskMe[] = testAskMe;

  constructor() {
    addIcons({ rocket, flask, help });
  }

  ngOnInit() {}

}
