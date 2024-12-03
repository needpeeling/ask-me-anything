import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { IonCardSubtitle, IonAvatar, IonCardHeader, IonCard, IonCardTitle, IonCardContent, IonChip, ModalController } from "@ionic/angular/standalone";
import { Subject, takeUntil } from 'rxjs';
import { testFeed } from 'src/app/data/test/posts';
import { PostFeed } from 'src/app/types/post';
import { ViewPostComponent } from '../view-post/view-post.component';

@Component({
  selector: 'app-feed',
  templateUrl: './feed.component.html',
  styleUrls: ['./feed.component.scss'],
  standalone: true,
  imports: [ IonChip, IonAvatar, IonCard, IonCardHeader, 
    IonCardTitle, IonCardSubtitle, IonCardContent
  ]
})
export class FeedComponent  implements OnInit {
  posts: PostFeed[] = testFeed;
  destroy$: Subject<void> = new Subject();

  constructor(
    private activatedRoute: ActivatedRoute,
    private modalController: ModalController,
    private router: Router,

  ) { }

  ngOnInit(): void {
    this.checkRouteParams();
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