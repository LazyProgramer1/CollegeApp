import { Injectable } from "@angular/core";
import { AngularFirestore, AngularFirestoreCollection } from "@angular/fire/firestore";
import * as firebase from "firebase/app";
import { map } from 'rxjs/operators';
import "firebase/storage";
import { AngularFireAuth } from "@angular/fire/auth";
import { Observable } from 'rxjs';
export interface AcademicsDetail{
  id?: string;
  Birthday: string;
  Email: string;
  First_Name: string;
  Last_Name: string;
  Gender: string;
  PhoneNumber: string;
}

@Injectable({
  providedIn: "root"
})
export class FirebaseService {
  private snapshotChangesSubscription: any;
  private personalCollection : AngularFirestoreCollection<AcademicsDetail>;
  private details: Observable<AcademicsDetail[]>;

  constructor(public afs: AngularFirestore, public afAuth: AngularFireAuth) {

    this.personalCollection = afs.collection<AcademicsDetail>('personalization');
    this.details = this.personalCollection.snapshotChanges().pipe(
      map(actions=>{
        return actions.map(a => {
          const data = a.payload.doc.data();
          const id = a.payload.doc.id;
          return{id,...data};
        });
      })
    )
  }

  getTasks() {
    return new Promise<any>((resolve, reject) => {
      this.afAuth.user.subscribe(currentUser => {
        if (currentUser) {
          this.snapshotChangesSubscription = this.afs
            .collection("people")
            .doc(currentUser.uid)
            .collection("tasks")
            .snapshotChanges();
          resolve(this.snapshotChangesSubscription);
        }
      });
    });
  }

  getTask(taskId) {
    return new Promise<any>((resolve, reject) => {
      this.afAuth.user.subscribe(currentUser => {
        if (currentUser) {
          this.snapshotChangesSubscription = this.afs
            .doc<any>("people/" + currentUser.uid + "/tasks/" + taskId)
            .valueChanges()
            .subscribe(
              snapshots => {
                resolve(snapshots);
              },
              err => {
                reject(err);
              }
            );
        }
      });
    });
  }

  unsubscribeOnLogOut() {
    //remember to unsubscribe from the snapshotChanges
    this.snapshotChangesSubscription.unsubscribe();
  }

  updateuserprofileacademic(taskKey, value) {
    return new Promise<any>((resolve, reject) => {
      let currentUser = firebase.auth().currentUser;
      this.afs
        .collection("userprofile")
        .doc(currentUser.uid)
        .collection("academics")
        .doc(taskKey)
        .set(value)
        .then(
          res => resolve(res),
          err => reject(err)
        );
    });
  }

  updateuserprofile(taskKey, value) {
    return new Promise<any>((resolve, reject) => {
      let currentUser = firebase.auth().currentUser;
      this.afs
        .collection("userprofile")
        .doc(currentUser.uid)
        .collection("personalization")
        .doc(taskKey)
        .set(value)
        .then(
          res => resolve(res),
          err => reject(err)
        );
    });
  }

  deleteTask(taskKey) {
    return new Promise<any>((resolve, reject) => {
      let currentUser = firebase.auth().currentUser;
      this.afs
        .collection("people")
        .doc(currentUser.uid)
        .collection("tasks")
        .doc(taskKey)
        .delete()
        .then(
          res => resolve(res),
          err => reject(err)
        );
    });
  }

  createTask(value) {
    return new Promise<any>((resolve, reject) => {
      let currentUser = firebase.auth().currentUser;
      this.afs
        .collection("people")
        .doc(currentUser.uid)
        .collection("tasks")
        .add({
          title: value.title,
          description: value.description
          //image: value.image
        })
        .then(
          res => resolve(res),
          err => reject(err)
        );
    });
  }

  encodeImageUri(imageUri, callback) {
    var c = document.createElement("canvas");
    var ctx = c.getContext("2d");
    var img = new Image();
    img.onload = function() {
      var aux: any = this;
      c.width = aux.width;
      c.height = aux.height;
      ctx.drawImage(img, 0, 0);
      var dataURL = c.toDataURL("image/jpeg");
      callback(dataURL);
    };
    img.src = imageUri;
  }

  uploadImage(imageURI, randomId) {
    return new Promise<any>((resolve, reject) => {
      let storageRef = firebase.storage().ref();
      let imageRef = storageRef.child("image").child(randomId);
      this.encodeImageUri(imageURI, function(image64) {
        imageRef.putString(image64, "data_url").then(
          snapshot => {
            snapshot.ref.getDownloadURL().then(res => resolve(res));
          },
          err => {
            reject(err);
          }
        );
      }); 
    });
  }
  postdetails(academics: AcademicsDetail){
    return this.personalCollection.add(academics);
  }
  getFeedback(id){
    return this.personalCollection.doc<AcademicsDetail>(id).valueChanges();
  }
  updatefeedback(details: AcademicsDetail, id: string) {
    return this.personalCollection.doc(id).update(details);
  }

}
