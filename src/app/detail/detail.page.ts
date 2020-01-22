import { Component, OnInit } from '@angular/core';
import { Storage } from '@ionic/storage';


@Component({
  selector: 'app-detail',
  templateUrl: './detail.page.html',
  styleUrls: ['./detail.page.scss'],
})
export class DetailPage implements OnInit {
data :any={};
  constructor(private storage:Storage) { }

  ngOnInit() {
    this. getArticle();
  }
  async getArticle() {
    const result = await this.storage.get('college');
    if (result != null) {
      this.data = result;
      console.log(this.data);
    }

  }}
