import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TermsofConditionPage } from './termsof-condition.page';

const routes: Routes = [
  {
    path: '',
    component: TermsofConditionPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TermsofConditionPageRoutingModule {}
