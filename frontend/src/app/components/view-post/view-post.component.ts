import { Component } from '@angular/core';
import {
  IonCardSubtitle, IonAvatar, IonCardHeader, IonCard, IonCardTitle, IonCardContent, IonInput,
  IonHeader, IonToolbar, IonTitle, IonBackButton, IonButtons, ModalController, IonFooter,
  IonButton, IonIcon, IonLabel, IonChip
} from "@ionic/angular/standalone";
import { addIcons } from 'ionicons';
import { arrowBack, arrowBackCircle, chatboxOutline, heart, heartOutline } from 'ionicons/icons';
import { testPostView } from 'src/app/data/test/posts';
import { PostComment, PostView } from 'src/app/types/post';
import { CommentComponent } from './comment/comment.component';

@Component({
  selector: 'app-view-post',
  templateUrl: './view-post.component.html',
  styleUrls: ['./view-post.component.scss'],
  standalone: true,
  imports: [IonChip, IonLabel, 
    IonFooter, IonBackButton, IonButtons, IonTitle, IonToolbar, IonHeader, IonIcon, IonButtons, IonButton, IonAvatar, IonCard, IonCardHeader, 
    IonCardTitle, IonCardSubtitle, IonCardContent
  ]
})
export class ViewPostComponent {
  title: string = 'View Post'
  post: PostView = testPostView;

  constructor(
    private modalController: ModalController
  ) {
    addIcons({ arrowBackCircle, arrowBack, chatboxOutline, heartOutline, heart });
  }

  ionViewWillEnter() {}

  likePost(post: PostView): void {
    post.liked = !post.liked;
    post.actions.likes = post.liked ? post.actions.likes + 1 : post.actions.likes - 1;
  }

  likeComment(comment: PostComment): void {
    comment.liked = !comment.liked;
    comment.likes = comment.liked ? comment.likes + 1 : comment.likes - 1;
  }

  async comment() {
    const modal = await this.modalController.create({ 
      component: CommentComponent,
      componentProps: {
        postId: this.post.id,
        postContent: this.post.content,
        color: this.post.category.color
      }
    });
    modal.present();
    const { data, role } = await modal.onWillDismiss();

    if (role === 'confirm') {
      console.log(data);
    }
  }

  close(): Promise<boolean> {
    return this.modalController.dismiss(null, 'cancel');
  }
}
