import { Routes } from '@angular/router';
import { ProfileComponent } from './components/profile/profile.component';
import { AskMeComponent } from './components/ask-me/ask-me.component';
import { FeedComponent } from './components/feed/feed.component';
import { ChatComponent } from './components/chat/chat.component';

export const routes: Routes = [
  { 
    path: '', 
    redirectTo: 'feed', 
    pathMatch: 'full' 
  },
  {
    path: 'feed',
    component: FeedComponent
    // loadChildren: () => import('./tabs/tabs.routes').then((m) => m.routes),
  },
  {
    path: 'profile',
    component: ProfileComponent
    // loadChildren: () => import('./tabs/tabs.routes').then((m) => m.routes),
  },
  {
    path: 'ask-me',
    component: AskMeComponent
    // loadChildren: () => import('./tabs/tabs.routes').then((m) => m.routes),
  },
  {
    path: 'chat',
    component: ChatComponent
    // loadChildren: () => import('./tabs/tabs.routes').then((m) => m.routes),
  },
  // {
  //   path: 'post/:id',
  //   redirectTo: '/home', // Redirect to home
  //   pathMatch: 'full',
  // },
];