import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CSSEPage } from './csse.page';

const routes: Routes = [
  {
    path: '',
    component: CSSEPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CSSEPageRoutingModule {}
