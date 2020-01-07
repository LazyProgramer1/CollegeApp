import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ALevelPageRoutingModule } from './a-level-routing.module';

import { ALevelPage } from './a-level.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ALevelPageRoutingModule
  ],
  declarations: [ALevelPage]
})
export class ALevelPageModule {}
