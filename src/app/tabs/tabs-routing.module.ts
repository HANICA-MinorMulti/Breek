import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TabsPage } from './tabs.page';

const routes: Routes = [
  {
    path: 'tabs',
    component: TabsPage,
    children: [
      {
        path: 'tab1',
        children: [
          {
            path: '',
            loadChildren: () =>
              import('../tab1/tab1.module').then(m => m.Tab1PageModule)
          }
        ]
      },
      {
        path: 'tab2',
        children: [
          {
            path: '',
            loadChildren: () =>
              import('../tab2/tab2.module').then(m => m.Tab2PageModule)
          }
        ]
      },
      {
        path: 'activities-page',
        children: [
          {
            path: '',
            loadChildren: () =>
              import('../activities-page/activities-page.module').then(m => m.ActivitiesPagePageModule)
          }
        ]
      },
      {
        path: 'my-profile',
        children: [
          {
            path: '',
            loadChildren: () =>
              import('../my-profile/my-profile.module').then(m => m.MyProfileModule)
          }
        ]
      },
      {
        path: '/tabs',
        redirectTo: '/tabs/tab1',
        pathMatch: 'full'
      }
    ]
  },
  {
    path: '/tabs',
    redirectTo: '/tabs/tab1',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TabsPageRoutingModule {}
