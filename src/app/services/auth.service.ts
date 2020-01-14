// import { Injectable } from '@angular/core';
// import {Router, NavigationEnd} from '@angular/router';
// import {auth} from 'firebase/app';
// import {AngularFireAuth} from '@angular/fire/auth';
// import{
//   AngularFirestore,
//   AngularFirestoreDocument
// } from '@angular/fire/firestore';
// import {Observable, of} from 'rxjs';
// import {switchMap} from 'rxjs/operators';
// import {User} from './user.model';



// @Injectable({
//   providedIn: 'root'
// })
// export class AuthService {
//   user$: Observable<User>;
//   constructor(
//     private afAuth: AngularFireAuth,
//     private afs: AngularFirestore,
//     private router: Router
//   ) { 
//     this.user$ = this.afAuth.authState.pipe(
//       switchMap(user =>{
//         if (user) {
//           return this.afs.doc<User>(`users/${user.uid}`).valueChanges();
          
//         }
//         else{
//           return of (null);
//         }

//       })
//     );
//   }
//   async googleSignin(){
//     const provider = new auth.GoogleAuthProvider();
//     const credentail = await this.afAuth.auth.signInWithPopup(provider);
//     return this.updateUserData(credentail.user);
//   }

//   async signOut()
//   {
//     await this.afAuth.auth.signOut();
//     return this.router.navigate(['/']);
//   }

//   private updateUserData({uid, email, displayName, photoURL}: User){
//     const userRef: AngularFirestoreDocument<User> = this.afs.doc(`users/${uid}`);
  
//     const data = {
//       uid,
//       email,
//       displayName,
//       photoURL
//     };

//     return userRef.set(data, {merge: true});

//   }


// }




import { Injectable } from '@angular/core';
import * as firebase from 'firebase/app';
import { FirebaseService } from './firebase.service';
import { AngularFireAuth } from '@angular/fire/auth';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(
    private firebaseService: FirebaseService,
    public afAuth: AngularFireAuth
  ){}

  doRegister(value){
   return new Promise<any>((resolve, reject) => {
     firebase.auth().createUserWithEmailAndPassword(value.email, value.password)
     .then(
       res => resolve(res),
       err => reject(err))
   })
  }

  doLogin(value){
   return new Promise<any>((resolve, reject) => {
     firebase.auth().signInWithEmailAndPassword(value.email, value.password)
     .then(
       res => resolve(res),
       err => reject(err))
   })
  }

  doLogout(){
    return new Promise((resolve, reject) => {
      this.afAuth.auth.signOut()
      .then(() => {
        this.firebaseService.unsubscribeOnLogOut();
        resolve();
      }).catch((error) => {
        console.log(error);
        reject();
      });
    })
  }
}

