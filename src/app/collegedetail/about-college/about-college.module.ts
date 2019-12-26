import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AboutCollegePageRoutingModule } from './about-college-routing.module';

import { AboutCollegePage } from './about-college.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AboutCollegePageRoutingModule
  ],
  declarations: [AboutCollegePage]
})
export class AboutCollegePageModule {}
