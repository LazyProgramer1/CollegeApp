import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { BBATopupPageRoutingModule } from './bba-topup-routing.module';

import { BBATopupPage } from './bba-topup.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    BBATopupPageRoutingModule
  ],
  declarations: [BBATopupPage]
})
export class BBATopupPageModule {}
