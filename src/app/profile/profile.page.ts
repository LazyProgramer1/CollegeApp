import { Component, OnInit } from '@angular/core';
import { FirebaseService, AcademicsDetail } from '../services/firebase.service';
import { Validators, FormBuilder, FormGroup, FormControl } from '@angular/forms';
import { LoadingController, ToastController, NavController } from '@ionic/angular';
import { Router, ActivatedRoute } from '@angular/router';
import { ImagePicker } from '@ionic-native/image-picker/ngx';
//import { WebView } from '@ionic-native/ionic-webview/ngx';


@Component({
  selector: 'app-profile',
  templateUrl: './profile.page.html',
  styleUrls: ['./profile.page.scss'],
})
export class ProfilePage implements OnInit {
//   validations_form:FormGroup;
//   image:any;

//   constructor(
//     private imagePicker: ImagePicker,
//     public toastCtrl: ToastController,
//     public loadingCtrl: LoadingController,
//     public router: Router,
//     private formBuilder: FormBuilder,
//     private firebaseService: FirebaseService //private webview: WebView

//   ) { }

//   ngOnInit() {
//     this.resetFields();
//   }



// onSubmit(value) {
//   let data = {
//     First_Name:value.First_Name,
//     Last_Name:value.Last_Name,
//     phonenumber:value.phonenumber,

//     //image: this.image
//   };

// }
//   resetFields() {
//     this.image = "./assets/imgs/default_image.jpg";
//     this.validations_form = this.formBuilder.group({
//       title: new FormControl("", Validators.required),
//       description: new FormControl("", Validators.required)
//     });
//   }
details: AcademicsDetail = {
  Birthday: "",
  Email: "",
  First_Name: "",
  Last_Name: "",
  Gender: "",
  PhoneNumber: ""
};
feedId = null;
constructor(private service: FirebaseService, private toast: ToastController, private route: ActivatedRoute, private loadingController: LoadingController, private nav: NavController) { }

ngOnInit() {
  this.feedId = this.route.snapshot.params['id'];
  if (this.feedId)  {
    this.loadfeed();
  }
}
async loadfeed() {
  const loading = await this.loadingController.create({
    message: 'Loading Todo..'
  });
  await loading.present();

  this.service.getFeedback(this.feedId).subscribe(res => {
    loading.dismiss();
    this.details = res;
  });
}

async presentToast() {
  const toast = await this.toast.create({
    message: 'Thank you for your suggestion.',
    duration: 2000
  });
  toast.present();
}

async savefeedback() {

  const loading = await this.loadingController.create({
    message: 'Saving Feeding wait..'
  });
  await loading.present();

  if (this.feedId) {
    this.service.updatefeedback(this.details, this.feedId).then(() => {
      loading.dismiss();
      this.nav.back();
    });
  } else {
    this.service.postdetails(this.details).then(() => {
      loading.dismiss();
      this.presentToast();
      this.nav.back();
    });
  }
}

}