import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CollegedetailPage } from './collegedetail.page';

const routes: Routes = [
  {
    path: '',
    component: CollegedetailPage
  },
  {
    path: 'about-college',
    loadChildren: () => import('./about-college/about-college.module').then( m => m.AboutCollegePageModule)
  },
  {
    path: 'courses',
    loadChildren: () => import('./courses/courses.module').then( m => m.CoursesPageModule)
  },
  {
    path: 'college-galary',
    loadChildren: () => import('./college-galary/college-galary.module').then( m => m.CollegeGalaryPageModule)
  },
  {
    path: 'facilities',
    loadChildren: () => import('./facilities/facilities.module').then( m => m.FacilitiesPageModule)
  },
  {
    path: 'contacts',
    loadChildren: () => import('./contacts/contacts.module').then( m => m.ContactsPageModule)
  },
 

  
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CollegedetailPageRoutingModule {}
