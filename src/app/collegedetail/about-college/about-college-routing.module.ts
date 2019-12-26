import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AboutCollegePage } from './about-college.page';

const routes: Routes = [
  {
    path: '',
    component: AboutCollegePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AboutCollegePageRoutingModule {}
