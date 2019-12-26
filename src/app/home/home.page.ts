import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  colleges={"urlToImage":"https://patancollege.edu.np/wp-content/uploads/2018/06/DVS180516-1358.jpg"
};
articles:Array<any> = [
this.colleges,
]

  constructor() {}

}
