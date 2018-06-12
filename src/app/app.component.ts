import { Component } from '@angular/core';



@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';
  toogle: boolean = true;
  time = '';
  state = '';

  arr: any[] = [];

  toggles(){
    if(this.toogle === true) {
      this.toogle = false;

    } else {
      this.toogle = !this.toogle;
    }
    this.timer();

  }
  timer(){
    this.arr.push({
      time: Date(),
      state: this.toogle,

    });

  }
}




