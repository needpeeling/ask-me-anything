import { Component } from '@angular/core';
import { TitleService } from 'src/app/services/shared/title.service';
import { Post } from 'src/app/types/post';
import { IonContent, IonCardSubtitle, IonAvatar, IonCardHeader, IonCard, IonCardTitle, IonCardContent, IonChip } from "@ionic/angular/standalone";
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
  standalone: true,
  imports: [
    IonChip,
    IonContent,
    IonAvatar,
    CommonModule,
    IonCard,
    IonCardHeader,
    IonCardTitle,
    IonCardSubtitle,
    IonCardContent
  ]
})
export class HomeComponent {
  title: string = 'Home';
  posts: Post[] = [
    {
      id: 1,
      user: {
        name: 'John'
      },
      title: 'How to become a successful entrepreneur',
      preview: 'This guide will help you build a successful business from scratch.',
      categories: [
        {
          name: 'ama',
          label: 'Ask Me Anything',
        },
        {
          name: 'job',
          label: 'Job',
        }
      ],
      color: 'primary'
    },
    {
      id: 2,
      user: {
        name: 'Jane'
      },
      title: 'The importance of networking',
      preview: 'Discover how networking can help you grow and build your network.',
      categories: [
        {
          name: 'ama',
          label: 'Ask Me Anything',
        },
      ],
      color: 'secondary'
    },
    {
      id: 3,
      user: {
        name: 'Mike'
      },
      title: 'I was in the psychiatry for two months',
      preview: 'When I was 14 years old I lived for two months in a psychiatry and shared together with ...',
      categories: [
        {
          name: 'ama',
          label: 'Ask Me Anything',
        }
      ],
      color: 'tertiary'
    },
    {
      id: 4,
      user: {
        name: 'Emily'
      },
      title: 'The world of fashion',
      preview: 'I started my fashion journey when I was 18 years old. I have been wearing clothes for 20 years now.',
      categories: [
        {
          name: 'ama',
          label: 'Ask Me Anything',
        },
        {
          name: 'fashion',
          label: 'Fashion',
        }
      ],
      color: 'success'
    }
  ];

  constructor(
    private titleService: TitleService
  ) {
  }

  ionViewWillEnter() {
    this.titleService.setTitle(this.title);
  }
}
