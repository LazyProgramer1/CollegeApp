import { Component } from '@angular/core';

import { Platform } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';
import {AuthService} from './services/auth.service';
import { auth } from 'firebase/app';
import { AngularFireAuth } from '@angular/fire/auth';
import { Router } from '@angular/router';


@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss']
})
export class AppComponent {
  public appPages = [
    {
      title: 'Profile',
      url: '/profiles',
      icon: 'person'
    },
    {
      title: 'Setting',
      url: '/settings',
      icon: 'Settings'
    },
    {
      title: 'Bookmark',
      url: '/bookmarks',
      icon: 'bookmarks'
    },
    {
      title: 'About Us',
      url: '/about',
      icon: 'people'
    }
  ];


  constructor(
    private platform: Platform,
    private splashScreen: SplashScreen,
    private statusBar: StatusBar,
    public afAuth:AngularFireAuth,
    private router:Router,
    private authService:AuthService

  ) {
    this.initializeApp();
  }

  initializeApp() {
    this.platform.ready().then(() => {
      this.afAuth.user.subscribe(user =>{
        if(user){
          this.router.navigate(["/home"]);
        }
        else{
          this.router.navigate(["/login"]);
        }
      }, err =>{
          this.router.navigate(["/login"]);

      },()=>{
        this.splashScreen.hide();
      })
      this.statusBar.styleDefault(); 
    });
  }
  logout(){
    this.authService.doLogout()
    .then(res => {
      this.router.navigate(["/login"]);
    }, err => {
      console.log(err);
    })
  }
}
