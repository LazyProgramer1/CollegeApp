import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PlustwocollegePage } from './plustwocollege.page';

const routes: Routes = [
  {
    path: '',
    component: PlustwocollegePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PlustwocollegePageRoutingModule {}
