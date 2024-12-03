import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { IonCardSubtitle, IonAvatar, IonCardHeader, IonCard, IonCardTitle, IonCardContent, IonChip, ModalController, IonContent, IonIcon, IonButton, IonButtons } from "@ionic/angular/standalone";
import { Subject, takeUntil } from 'rxjs';
import { testPosts } from 'src/app/data/test/posts';
import { Post } from 'src/app/types/post';
import { ViewPostComponent } from '../view-post/view-post.component';
import { TitleService } from 'src/app/services/shared/title.service';
import { addIcons } from 'ionicons';
import { chatboxOutline, heartOutline } from 'ionicons/icons';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
  standalone: true,
  imports: [IonButtons, IonContent, IonAvatar, IonCard, IonCardHeader, IonCardTitle, IonCardSubtitle, IonCardContent, IonButton, IonIcon
  ]
})
export class HomeComponent  implements OnInit {
  posts: Post[] = testPosts;
  destroy$: Subject<void> = new Subject();
  title: string = 'Home';

  constructor(
    private activatedRoute: ActivatedRoute,
    private modalController: ModalController,
    private router: Router,
    private titleService: TitleService
  ) {
    addIcons({ chatboxOutline, heartOutline })
  }

  ngOnInit(): void {
    this.checkRouteParams();
  }

  
  ionViewWillEnter() {
    this.titleService.setTitle(this.title);
  }

  ngOnDestroy(): void {
    this.destroy$.next();
    this.destroy$.unsubscribe();
  }

  checkRouteParams(): void {
    this.activatedRoute.queryParams
    .pipe(
      takeUntil(this.destroy$)
    )
    .subscribe((params: Params) => {
      const id = params['post'];
      if (!isNaN(id)) {
        this.viewPost(Number(id));
      }
    });
  }

  navigateToPost(id: number) {
    this.router.navigate([], { queryParams: { post: id } });
  }

  async viewPost(id: number) {
    const modal = await this.modalController.create({
      component: ViewPostComponent,
    });
    modal.present();

    const { data, role } = await modal.onWillDismiss();

    if (role === 'confirm') {
      console.log('confirm');
    }
  }
}