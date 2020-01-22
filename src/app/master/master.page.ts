import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CollegelistService } from '../collegelist.service';
import {
  AngularFirestore,
  AngularFirestoreCollection
} from "@angular/fire/firestore";
import { Observable } from "rxjs";
import { Storage } from '@ionic/storage';

@Component({
  selector: 'app-master',
  templateUrl: './master.page.html',
  styleUrls: ['./master.page.scss'],
})
export class MasterPage implements OnInit {

  datas: any;
 
  sliderConfig = {
    slidesPerView: 1.6,
    spaceBetween: 5,
    centeredSlides: true
  };
 
 
  constructor(
    private router: Router, 
    private collegeService: CollegelistService,
    public db:AngularFirestore,private storage:Storage
    ) { }
 
  ngOnInit() {
    this.getAllPosts().subscribe((data: any) => {
      this.datas = data;
      console.log(data);
    });
  }
 
  openCollege() {
    this.router.navigate(['colleges']);
  }
  getAllPosts() {
    return this.db
      .collection("mastercollege")
      //.doc("vaf3q5sDJmXxD1FeQZAY")
     // .collection("BachelorCollege")

      .valueChanges();
  }
  async openDetail(data) {
    await this.storage.set('college',data)
      
     // navigate to next page by url

    this.router.navigateByUrl('/detail');  }

}