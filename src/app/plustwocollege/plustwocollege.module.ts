import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PlustwocollegePageRoutingModule } from './plustwocollege-routing.module';

import { PlustwocollegePage } from './plustwocollege.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PlustwocollegePageRoutingModule
  ],
  declarations: [PlustwocollegePage]
})
export class PlustwocollegePageModule {}
