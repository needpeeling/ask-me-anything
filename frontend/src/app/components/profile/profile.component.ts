import { Component } from '@angular/core';
import { IonContent } from '@ionic/angular/standalone';
import { TitleService } from 'src/app/services/shared/title.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss'],
  standalone: true,
  imports: [
    IonContent
  ]
})
export class ProfileComponent {
  title: string = 'Profile';

  constructor(
    private titleService: TitleService
  ) {}

  ionViewWillEnter(): void {
    this.titleService.setTitle(this.title);
  }
}
