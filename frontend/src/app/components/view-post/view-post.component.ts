import { Component } from '@angular/core';
import {
  IonCardSubtitle, IonAvatar, IonCardHeader, IonCard, IonCardTitle, IonCardContent, IonInput,
  IonHeader, IonToolbar, IonTitle, IonBackButton, IonButtons, ModalController, IonFooter,
  IonButton,
  IonIcon
} from "@ionic/angular/standalone";
import { addIcons } from 'ionicons';
import { arrowBack, arrowBackCircle, chatboxOutline, heartOutline } from 'ionicons/icons';
import { testPostView } from 'src/app/data/test/posts';
import { PostView } from 'src/app/types/post';

@Component({
  selector: 'app-view-post',
  templateUrl: './view-post.component.html',
  styleUrls: ['./view-post.component.scss'],
  standalone: true,
  imports: [
    IonFooter, IonBackButton, IonButtons, IonTitle, IonToolbar, IonHeader, IonIcon, IonButtons, IonButton, IonAvatar, IonCard, IonCardHeader, 
    IonCardTitle, IonCardSubtitle, IonCardContent, IonInput
  ]
})
export class ViewPostComponent {
  title: string = 'View Post'
  post: PostView = testPostView;

  constructor(
    private modalController: ModalController
  ) {
    addIcons({ arrowBackCircle, arrowBack, chatboxOutline, heartOutline });
  }

  ionViewWillEnter() {
  }

  close(): Promise<boolean> {
    return this.modalController.dismiss(null, 'cancel');
  }
}
