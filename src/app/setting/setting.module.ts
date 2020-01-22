import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { SettingPageRoutingModule } from './setting-routing.module';

import { SettingPage } from './setting.page';

import { StarRatingModule } from 'ionic4-star-rating';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    StarRatingModule,
    SettingPageRoutingModule
  ],
  declarations: [SettingPage]
})
export class SettingPageModule {}
