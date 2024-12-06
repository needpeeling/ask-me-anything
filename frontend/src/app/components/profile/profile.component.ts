import { Component } from '@angular/core';
import { IonContent, IonAvatar, IonCardSubtitle, IonCardTitle, IonItem, IonLabel, IonButton, IonIcon, IonPopover, IonAccordionGroup, IonAccordion } from '@ionic/angular/standalone';
import { addIcons } from 'ionicons';
import { flask, help, rocket } from 'ionicons/icons';
import { testUser } from 'src/app/data/test/user';
import { User } from 'src/app/types/user';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss'],
  standalone: true,
  imports: [IonAccordion, IonAccordionGroup, IonPopover, IonIcon, IonButton, IonLabel, IonItem, IonCardTitle, IonCardSubtitle, IonAvatar, IonContent
  ]
})
export class ProfileComponent {
  title: string = 'Profile';
  user: User = testUser;

  constructor(
  ) {
    addIcons({ rocket, flask, help });
  }

  ionViewWillEnter(): void {
  }
}
