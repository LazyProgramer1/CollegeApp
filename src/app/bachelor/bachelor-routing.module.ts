import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { BachelorPage } from './bachelor.page';

const routes: Routes = [
  {
    path: '',
    component: BachelorPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class BachelorPageRoutingModule {}
