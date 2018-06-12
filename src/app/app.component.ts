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
    this.colors();
  }
  timer(){
    this.arr.push({
      time: Date(),
      state: this.toogle,

    });

  }

  colors() {
    if(this.arr.length >= 10){
    console.log(this.arr.length);

  }
  }
  }




