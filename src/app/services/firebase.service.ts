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

  unsubscribeOnLogOut() {
    //remember to unsubscribe from the snapshotChanges
    this.snapshotChangesSubscription.unsubscribe();
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
