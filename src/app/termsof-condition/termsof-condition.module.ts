import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { TermsofConditionPageRoutingModule } from './termsof-condition-routing.module';

import { TermsofConditionPage } from './termsof-condition.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    TermsofConditionPageRoutingModule
  ],
  declarations: [TermsofConditionPage]
})
export class TermsofConditionPageModule {}
