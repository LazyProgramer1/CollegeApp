import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';

import { IonicModule, IonicRouteStrategy, PopoverController } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';

import { AngularFireModule } from '@angular/fire';
import { AngularFirestoreModule,FirestoreSettingsToken } from '@angular/fire/firestore';
import { AngularFireAuthModule } from '@angular/fire/auth';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { environment } from 'src/environments/environment';
import { AngularFireStorageModule } from "@angular/fire/storage";
import {ImagePicker} from "@ionic-native/image-picker/ngx";
import { Facebook } from '@ionic-native/facebook/ngx';

// const firebaseConfig = {
//   apiKey: "AIzaSyDD-jVCgVZ1f_FeVxLOoym7i2b8hKJzStg",
//   authDomain: "testproject-9dc39.firebaseapp.com",
//   databaseURL: "https://testproject-9dc39.firebaseio.com",
//   projectId: "testproject-9dc39",
//   storageBucket: "testproject-9dc39.appspot.com",
//   messagingSenderId: "407962423105",
//   appId: "1:407962423105:web:148eb720e721c85abddbc0",
//   measurementId: "G-ZTGJTEFQV3"
// };

@NgModule({
  declarations: [
    AppComponent,
  ],
  entryComponents: [],
  imports: [
    BrowserModule,
    // AngularFireModule.initilizeApp(config),
    AngularFireModule.initializeApp(environment.firebase),
    AngularFirestoreModule,
    AngularFireAuthModule,
    IonicModule.forRoot(),
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    AngularFireStorageModule
  ],
  providers: [
    StatusBar,
    SplashScreen,
    Facebook,
    ImagePicker,
    { provide: FirestoreSettingsToken, useValue: {} },
    { provide: RouteReuseStrategy, useClass: IonicRouteStrategy }
  ],
  bootstrap: [AppComponent,
    
  ],
  
})
export class AppModule {}
