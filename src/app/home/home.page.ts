import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  text = 'Changed';
  constructor() {}
  onChangeText() {
   this.text = 'Datta';
  }

}
