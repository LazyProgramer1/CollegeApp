import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CollegedetailPage } from './collegedetail.page';

const routes: Routes = [
  {
    path: '',
    component: CollegedetailPage
  },
  {
    path: 'about-college',
    loadChildren: () => import('./about-college/about-college.module').then( m => m.AboutCollegePageModule)
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CollegedetailPageRoutingModule {}
