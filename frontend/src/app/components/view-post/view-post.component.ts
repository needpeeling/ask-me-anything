import { Component } from '@angular/core';
import {
  IonCardSubtitle, IonAvatar, IonCardHeader, IonCard, IonCardTitle, IonCardContent, IonChip, IonInput,
  IonHeader, IonToolbar, IonTitle, IonBackButton, IonButtons, ModalController, IonFooter
} from "@ionic/angular/standalone";
import { addIcons } from 'ionicons';
import { arrowBack, arrowBackCircle } from 'ionicons/icons';
import { testViewPost } from 'src/app/data/test/posts';
import { PostCommunityView } from 'src/app/types/post';

@Component({
  selector: 'app-view-post',
  templateUrl: './view-post.component.html',
  styleUrls: ['./view-post.component.scss'],
  standalone: true,
  imports: [
    IonFooter, IonBackButton, IonButtons, IonTitle, IonToolbar, IonHeader,  IonChip, IonAvatar, IonCard, IonCardHeader, 
    IonCardTitle, IonCardSubtitle, IonCardContent, IonInput
  ]
})
export class ViewPostComponent {
  title: string = 'View Post'
  post: PostCommunityView = testViewPost;

  constructor(
    private modalController: ModalController
  ) {
    addIcons({ arrowBackCircle, arrowBack });
  }

  ionViewWillEnter() {
  }

  close(): Promise<boolean> {
    return this.modalController.dismiss(null, 'cancel');
  }
}
