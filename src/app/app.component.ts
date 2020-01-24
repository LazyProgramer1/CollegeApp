import { Component } from '@angular/core';

import { Platform } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';
import {AuthService} from './services/auth.service';
import { auth } from 'firebase/app';
import { AngularFireAuth } from '@angular/fire/auth';
import { Router } from '@angular/router';


import * as firebase from 'firebase/app';


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
    }
  

  ];


  constructor(
    private platform: Platform,
    private splashScreen: SplashScreen,
    private statusBar: StatusBar,
    public afAuth:AngularFireAuth,
    private router:Router,
    private authService:AuthService,


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
  logout1(){
    this.authService.doLogout()
    .then(res => {
      this.router.navigate(["/login"]);
    }, err => {
      console.log(err);
    })
  }

  logout(){
    this.router.navigate(["/login"]);
  }
  handleChange(){
    /////////
  }
  bachelor()
  {
    this.router.navigateByUrl('/bachelor');
  }
  master()
  {
    this.router.navigateByUrl('/master');
  }
  plus2()
  {
    this.router.navigateByUrl('/plustwocollege');
  }

  // PromptUserForAppRating(){
  //   this.appRate.preferences.storeAppURL={
  //     android:"market://details?id=CollegeApP"
  //   }
  //   this.appRate.promptForRating(true);
  // }

 
}
