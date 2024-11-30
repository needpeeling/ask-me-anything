import { Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { ProfileComponent } from './components/profile/profile.component';

export const routes: Routes = [
  { 
    path: '', 
    redirectTo: 'home', 
    pathMatch: 'full' 
  },
  {
    path: 'home',
    component: HomeComponent
    // loadChildren: () => import('./tabs/tabs.routes').then((m) => m.routes),
  },
  {
    path: 'profile',
    component: ProfileComponent
    // loadChildren: () => import('./tabs/tabs.routes').then((m) => m.routes),
  }
];