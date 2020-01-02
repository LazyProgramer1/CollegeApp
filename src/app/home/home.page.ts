import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CollegelistService } from '../collegelist.service';
 
@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})

export class HomePage implements OnInit {
 
  college = [];
  items = [];
 
  sliderConfig = {
    slidesPerView: 1.6,
    spaceBetween: 10,
    centeredSlides: true
  };
 
  constructor(private router: Router, private collegeService: CollegelistService) { }
 
  ngOnInit() {
    this.items = this.collegeService.getColleges();
    this.college= this.collegeService.getCart();
  }
 
  openCollege() {
    this.router.navigate(['colleges']);
  }
}