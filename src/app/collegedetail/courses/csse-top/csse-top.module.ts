import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CSSETopPageRoutingModule } from './csse-top-routing.module';

import { CSSETopPage } from './csse-top.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CSSETopPageRoutingModule
  ],
  declarations: [CSSETopPage]
})
export class CSSETopPageModule {}
