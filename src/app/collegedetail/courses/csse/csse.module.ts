import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CSSEPageRoutingModule } from './csse-routing.module';

import { CSSEPage } from './csse.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CSSEPageRoutingModule
  ],
  declarations: [CSSEPage]
})
export class CSSEPageModule {}
