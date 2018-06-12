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
  // arrcolor =

  arr: any[] = [];

  toggles(){
    if(this.toogle === true) {
      this.toogle = false;
      // this.timer();
      // console.log(this.toogle, Date());
    } else {
      this.toogle = true;
      // this.timer();
    }
    this.timer();
    this.colors();
    // console.log(this.arr.length);
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

  // }



