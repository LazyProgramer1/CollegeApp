import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CollegeGalaryPage } from './college-galary.page';

const routes: Routes = [
  {
    path: '',
    component: CollegeGalaryPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CollegeGalaryPageRoutingModule {}
