import { CollegelistService } from './../collegelist.service';
import { Component, OnInit } from '@angular/core';
 
@Component({
  selector: 'app-colleges',
  templateUrl: './colleges.page.html',
  styleUrls: ['./colleges.page.scss'],
})
export class CollegesPage implements OnInit {
 
 
  constructor(private cartService: CollegelistService) { }
 
  ngOnInit() {

}}