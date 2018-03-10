import { Component, OnInit } from '@angular/core';
import { timer } from 'rxjs/observable/timer';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  s = 0;
  m = 0;
  minute = '00';
  second = '00';
  work = true;

  ngOnInit() {
    const engine = timer(2000, 1000);
    engine.subscribe(tick => this.clock(tick));
  }

  clock(tick) {
    if (this.work === true) {
      this.workFunc(tick);
    } else {
      this.lookAwayFunc(tick);
    }
  }

  workFunc(tick) {
    console.log(this);
    // original
    // this.s = this.s + 1;
    // test
    this.s = this.s + 60;
    if ( this.s % 60 === 0) {
      this.s = 0;
      this.second = ('0' + this.s).slice(-2);
      // original
      // this.m = this.m + 1;
      // test
      this.m = this.m + 5;
      this.minute = ('0' + this.m).slice(-2);
      if (this.m % 20 === 0) {
        this.s = 0;
        this.m = 0;
        this.second = '00';
        this.minute = '00';
        this.work = false;
      }
    }
    this.second = ('0' + this.s).slice(-2);
  }

  lookAwayFunc(tick) {
    console.log('Look Away');
    // original
    // this.s = this.s + 1;
    // test
    this.s = this.s + 1;
    if ( this.s % 20 === 0) {
      this.s = 0;
      this.second = ('0' + this.s).slice(-2);
      this.s = 0;
      this.m = 0;
      this.second = '00';
      this.minute = '00';
      this.work = true;

    }
    this.second = ('0' + this.s).slice(-2);
  }
}
