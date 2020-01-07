import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CoursesPage } from './courses.page';

const routes: Routes = [
  {
    path: '',
    component: CoursesPage
  },
  {
    path: 'csse',
    loadChildren: () => import('./csse/csse.module').then( m => m.CSSEPageModule)
  },
  {
    path: 'csse-top',
    loadChildren: () => import('./csse-top/csse-top.module').then( m => m.CSSETopPageModule)
  },
  {
    path: 'bba',
    loadChildren: () => import('./bba/bba.module').then( m => m.BBAPageModule)
  },
  {
    path: 'bba-topup',
    loadChildren: () => import('./bba-topup/bba-topup.module').then( m => m.BBATopupPageModule)
  },
  {
    path: 'a-level',
    loadChildren: () => import('./a-level/a-level.module').then( m => m.ALevelPageModule)
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CoursesPageRoutingModule {}
