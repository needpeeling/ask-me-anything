import { Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';

export const routes: Routes = [
  {
    path: '',
    component: HomeComponent
    // loadChildren: () => import('./tabs/tabs.routes').then((m) => m.routes),
  },
];


// import { Routes } from '@angular/router';
// import { TabsPage } from './tabs.page';

// export const routes: Routes = [
//   {
//     path: 'tabs',
//     component: TabsPage,
//     children: [
//       {
//         path: 'tab1',
//         loadComponent: () =>
//           import('./tab1/tab1.page').then((m) => m.Tab1Page),
//       },
//       {
//         path: 'tab3',
//         loadComponent: () =>
//           import('./tab3/tab3.page').then((m) => m.Tab3Page),
//       },
//       {
//         path: '',
//         redirectTo: '/tabs/tab1',
//         pathMatch: 'full',
//       },
//     ],
//   },
//   {
//     path: '',
//     redirectTo: '/tabs/tab1',
//     pathMatch: 'full',
//   },
// ];
