import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { IonCardSubtitle, IonAvatar, IonCardHeader, IonCard, IonCardTitle, IonCardContent, IonChip, ModalController, IonContent } from "@ionic/angular/standalone";
import { Subject, takeUntil } from 'rxjs';
import { testCommunity } from 'src/app/data/test/posts';
import { PostCommunity } from 'src/app/types/post';
import { ViewPostComponent } from '../view-post/view-post.component';
import { TitleService } from 'src/app/services/shared/title.service';

@Component({
  selector: 'app-community',
  templateUrl: './community.component.html',
  styleUrls: ['./community.component.scss'],
  standalone: true,
  imports: [IonContent,  IonChip, IonAvatar, IonCard, IonCardHeader, IonCardTitle, IonCardSubtitle, IonCardContent
  ]
})
export class communityComponent  implements OnInit {
  posts: PostCommunity[] = testCommunity;
  destroy$: Subject<void> = new Subject();
  title: string = 'Community';

  constructor(
    private activatedRoute: ActivatedRoute,
    private modalController: ModalController,
    private router: Router,
    private titleService: TitleService
  ) {
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