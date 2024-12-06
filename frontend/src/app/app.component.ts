import { Component } from '@angular/core';
import { IonApp, IonTabs, IonTabBar, IonTabButton, IonIcon, IonLabel } from '@ionic/angular/standalone';
import { addIcons } from 'ionicons';
import { add, chatbubblesOutline, personOutline, homeOutline, handLeftOutline, notificationsOutline } from 'ionicons/icons';
import { ModalController } from '@ionic/angular';
import { CreatePostComponent } from './components/create-post/create-post.component';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  standalone: true,
  providers: [ModalController],
  imports: [IonApp, IonTabs, IonTabBar, IonTabButton, IonIcon, IonLabel]
})
export class AppComponent {
  constructor(
    private modalController: ModalController,
  ) {
    addIcons({ homeOutline, add, chatbubblesOutline, personOutline, handLeftOutline, notificationsOutline });
  }

  async createPost() {
    const modal = await this.modalController.create({
      component: CreatePostComponent,
    });
    modal.present();

    const { data, role } = await modal.onWillDismiss();

    if (role === 'confirm') {
      console.log('confirm');
    }
  }
}