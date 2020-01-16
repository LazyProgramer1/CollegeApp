import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CollegelistService } from '../collegelist.service';
import {
  AngularFirestore,
  AngularFirestoreCollection
} from "@angular/fire/firestore";
import { Observable } from "rxjs";

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})

export class HomePage implements OnInit {
 
  college = [];
  items = [];
  datas: any;
 
  sliderConfig = {
    slidesPerView: 1.6,
    spaceBetween: 5,
    centeredSlides: true
  };
 
 
  constructor(
    private router: Router, 
    private collegeService: CollegelistService,
    public db:AngularFirestore
    ) { }
 
  ngOnInit() {
    this.getAllPosts().subscribe((data: any) => {
      this.datas = data;
      console.log(data);
    });
  }
  //   this.items = this.collegeService.getColleges();
  //   this.college= this.collegeService.getCart();
  // }
 
  openCollege() {
    this.router.navigate(['colleges']);
  }
  getAllPosts() {
    return this.db
      .collection("college")
      .doc("vaf3q5sDJmXxD1FeQZAY")
      .collection("BachelorCollege")

      .valueChanges();
    // return this.db
    //   .collectionR("College List")
    //   .doc()
    //   .collection("Bachelors")
    //   .valueChanges();
    // const things = this.db.collection("things").valueChanges();
    // things.subscribe(console.log);
  }
}