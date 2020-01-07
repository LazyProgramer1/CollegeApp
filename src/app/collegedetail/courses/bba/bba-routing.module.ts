import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { BBAPage } from './bba.page';

const routes: Routes = [
  {
    path: '',
    component: BBAPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class BBAPageRoutingModule {}
