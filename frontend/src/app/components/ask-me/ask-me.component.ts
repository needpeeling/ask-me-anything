import { Component } from '@angular/core';
import { IonAvatar, IonCard, IonCardContent, IonCardHeader, IonCardTitle, IonCardSubtitle, IonIcon, IonButton, IonPopover, IonContent } from "@ionic/angular/standalone";
import { addIcons } from 'ionicons';
import { flask, help, rocket } from 'ionicons/icons';
import { testAskMe } from 'src/app/data/test/posts';
import { TitleService } from 'src/app/services/shared/title.service';
import { PostAskMe } from 'src/app/types/post';

@Component({
  selector: 'app-ask-me',
  templateUrl: './ask-me.component.html',
  styleUrls: ['./ask-me.component.scss'],
  standalone: true,
  imports: [IonContent, IonPopover, IonIcon, IonCardSubtitle, IonCardTitle, IonButton, IonCardHeader, IonAvatar, IonCard, IonCardContent
  ]
})
export class AskMeComponent {
  title: string = 'Ask Me';
  posts: PostAskMe[] = testAskMe;

  constructor(
    private titleService: TitleService
  ) {
    addIcons({ rocket, flask, help });
  }

  ngOnInit() {}

  ionViewWillEnter() {
    this.titleService.setTitle(this.title);
  }
}
