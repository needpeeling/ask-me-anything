import { Component } from '@angular/core';
import { TitleService } from 'src/app/services/shared/title.service';
import { IonContent, IonTabButton, IonLabel, IonTabBar, ScrollCustomEvent } from "@ionic/angular/standalone";
import { CommonModule } from '@angular/common';
import { FeedComponent } from "../feed/feed.component";
import { AskMeComponent } from "../ask-me/ask-me.component";
import { ActivatedRoute, Router } from '@angular/router';
import { HomeTabSelection } from 'src/app/types/home';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
  standalone: true,
  imports: [IonTabBar, IonLabel, IonTabButton,
    IonContent, CommonModule, FeedComponent, AskMeComponent]
})
export class HomeComponent {
  title: string = 'Home';
  lastScrollTop = 0;
  tabBarTransform = 'translateY(0)';
  currentTab: HomeTabSelection = 'feed';

  constructor(
    private titleService: TitleService,
    private router: Router,
    private activatedRoute: ActivatedRoute
  ) {}

  ionViewWillEnter() {
    this.titleService.setTitle(this.title);
    this.currentTab = this.activatedRoute.snapshot.queryParams['tab'];
  }

  navigateToTab(tab: HomeTabSelection) {
    this.router.navigate([], { queryParams: { tab: tab } });
    this.currentTab = tab;
  }

  onScroll(event: ScrollCustomEvent) {
    const currentScrollTop = event.detail.scrollTop;
    this.tabBarTransform = currentScrollTop > this.lastScrollTop ? 'translateY(-100%)' : 'translateY(0)';
    this.lastScrollTop = currentScrollTop;
  }
}