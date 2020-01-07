import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ALevelPage } from './a-level.page';

const routes: Routes = [
  {
    path: '',
    component: ALevelPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ALevelPageRoutingModule {}
