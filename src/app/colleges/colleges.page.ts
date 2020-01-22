import { CollegelistService } from './../collegelist.service';
import { Component, OnInit } from '@angular/core';
import { Storage } from '@ionic/storage';
 
@Component({
  selector: 'app-colleges',
  templateUrl: './colleges.page.html',
  styleUrls: ['./colleges.page.scss'],
})
export class CollegesPage implements OnInit {
 data:any;
 
  constructor(private cartService: CollegelistService,private storage:Storage) { }
 
  ngOnInit() {}
async getArticle(){
  const result = await this.storage.get('currentArticle');
  if(result != null){
    this.data = result;
  }
}
}