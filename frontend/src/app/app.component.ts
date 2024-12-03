import { Component } from '@angular/core';
import { IonApp, IonTabs, IonTabBar, IonTabButton, IonIcon, IonLabel, IonButton, IonTitle, IonToolbar, IonHeader, IonButtons } from '@ionic/angular/standalone';
import { addIcons } from 'ionicons';
import { home, add, chatbubble, person, help, chatbubblesOutline, personOutline, homeOutline, handLeftOutline, peopleOutline, notificationsOutline } from 'ionicons/icons';
import { ModalController } from '@ionic/angular';
import { CreatePostComponent } from './components/create-post/create-post.component';
import { TitleService } from './services/shared/title.service';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  standalone: true,
  providers: [ModalController],
  imports: [IonHeader, IonToolbar, IonTitle, IonApp, IonTabs, IonTabBar, IonTabButton, IonIcon, IonLabel]
})
export class AppComponent {
  constructor(
    private modalController: ModalController,
    public titleService: TitleService
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