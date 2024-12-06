import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { IonCardSubtitle, IonAvatar, IonCardHeader, IonCard, IonCardTitle, IonCardContent, ModalController, IonIcon, IonButton, IonButtons, IonHeader, IonToolbar, IonSegment, IonSegmentButton, IonLabel, IonSegmentContent, IonSegmentView, IonModal, IonTitle } from "@ionic/angular/standalone";
import { of, Subject, takeUntil } from 'rxjs';
import { testPosts } from 'src/app/data/test/posts';
import { Post } from 'src/app/types/post';
import { ViewPostComponent } from '../view-post/view-post.component';
import { addIcons } from 'ionicons';
import { chatboxOutline, heartOutline, filterOutline, logoMastodon, heart, briefcase, prism } from 'ionicons/icons';
import { testCategories } from 'src/app/data/test/categories';
import { Category } from 'src/app/types/category';
import { FormControl, FormGroup, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { FilterForYouComponent } from './filter-for-you/filter-for-you.component';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
  standalone: true,
  providers: [ModalController],
  imports: [
    IonLabel, IonSegmentButton, IonSegment, IonToolbar, 
    IonHeader, IonButtons, IonAvatar, IonCard, IonCardHeader, IonCardTitle, IonCardSubtitle, IonCardContent, IonButton, IonIcon,
    ReactiveFormsModule, FormsModule, IonSegmentContent, IonSegmentView
  ]
})
export class HomeComponent  implements OnInit {
  posts: Post[] = testPosts;
  destroy$: Subject<void> = new Subject();
  title: string = 'Home';
  categories: Category[] = testCategories;
  form: FormGroup = new FormGroup({
    categories: new FormControl(),
  });
  currentSegment: 'best-of' | 'for-you' = 'best-of';

  constructor(
    private activatedRoute: ActivatedRoute,
    private modalController: ModalController,
    private router: Router,
  ) {
    addIcons({prism,filterOutline,chatboxOutline,heartOutline,heart});
  }

  ngOnInit(): void {
    this.checkRouteParams();
  }

  ionViewWillEnter() {
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

  switchSegment(event: any): void {
    this.currentSegment = event.target.value;
  }
  
  like(post: Post): void {
    post.liked = !post.liked;
    post.actions.likes = post.liked ? post.actions.likes + 1 : post.actions.likes - 1;
  }

  async filterForYou() {
    const modal = await this.modalController.create({ component: FilterForYouComponent });
    modal.present();
    const { data, role } = await modal.onWillDismiss();

    if (role === 'confirm') {
      console.log(data);
    }
  }
}