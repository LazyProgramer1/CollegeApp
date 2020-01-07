import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CSSETopPage } from './csse-top.page';

const routes: Routes = [
  {
    path: '',
    component: CSSETopPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CSSETopPageRoutingModule {}
