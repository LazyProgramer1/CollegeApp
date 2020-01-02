import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CollegeGalaryPageRoutingModule } from './college-galary-routing.module';

import { CollegeGalaryPage } from './college-galary.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CollegeGalaryPageRoutingModule
  ],
  declarations: [CollegeGalaryPage]
})
export class CollegeGalaryPageModule {}
