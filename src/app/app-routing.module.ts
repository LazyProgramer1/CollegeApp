
import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { CollegedetailPageModule } from './collegedetail/collegedetail.module';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'login',
    pathMatch: 'full'
  },
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then(m => m.HomePageModule)
  },
  {
    path: 'profiles',
    loadChildren: () => import('./profile/profile.module').then(m => m.ProfilePageModule)
  },
  {
    path: 'collegedetail',
    loadChildren: () => import('./collegedetail/collegedetail.module').then(m => m.CollegedetailPageModule)
  },
  {
    path: 'about-college',
    loadChildren: () => import('./collegedetail/about-college/about-college.module').then(m => m.AboutCollegePageModule)
  },
  {

    path: 'courses',
    loadChildren: () => import('./collegedetail/courses/courses.module').then(m=>m.CoursesPageModule)
  },
  {
    path:'college-galary',
    loadChildren: () => import('./collegedetail/college-galary/college-galary.module').then(m=>m.CollegeGalaryPageModule)
  },
  {
    path:'facilities',
    loadChildren: () => import('./collegedetail/facilities/facilities.module').then(m=>m.FacilitiesPageModule)
  },
  {
    path:'contacts',
    loadChildren: () => import('./collegedetail/contacts/contacts.module').then(m=>m.ContactsPageModule)
  },
  {
    path:'reviews',
    loadChildren: () => import('./collegedetail/reviews/reviews.module').then(m=>m.ReviewsPageModule)
  },
  {


  {
    path:'B.Sc.(Hons.) in CS&SE',
    loadChildren: () => import('./collegedetail/courses/csse/csse.module').then(m=>m.CSSEPageModule)
  },
  {
    path:'B.Sc (Hons) CS&SE – Topup',
    loadChildren: () => import('./collegedetail/courses/csse-top/csse-top.module').then(m=>m.CSSETopPageModule)
  },
  {
    path: 'BA (Hons) Business Administration',
    loadChildren: () => import('./collegedetail/courses/bba/bba.module').then(m=>m.BBAPageModule)
  },
  {
    path: 'BA (Hons) Business Administration (Topup) ',
    loadChildren: () => import('./collegedetail/courses/bba-topup/bba-topup.module').then(m=>m.BBATopupPageModule)
  },
  {
    path: 'A-level ',
    loadChildren: () => import('./collegedetail/courses/a-level/a-level.module').then(m=>m.ALevelPageModule)
  },

  {

    path: 'settings',
    loadChildren: () => import('./setting/setting.module').then( m => m.SettingPageModule)
  },
  {

    path: 'about',
    loadChildren: () => import('./aboutus/aboutus.module').then( m => m.AboutusPageModule)
  },

  {
    path: 'bookmarks',
    loadChildren: () => import('./bookmarks/bookmarks.module').then( m => m.BookmarksPageModule)
  },


  {
    path: 'login',
    loadChildren: () => import('./login/login.module').then( m => m.LoginPageModule)
  },
  {
    path: 'register',

    loadChildren: () => import('./register/register.module').then( m => m.RegisterPageModule)
  },





];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}

