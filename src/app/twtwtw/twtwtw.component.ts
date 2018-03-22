import { Component, OnInit } from '@angular/core';
import { timer } from 'rxjs/observable/timer';

@Component({
  selector: 'app-twtwtw',
  templateUrl: './twtwtw.component.html',
  styleUrls: ['./twtwtw.component.css']
})
export class TwtwtwComponent implements OnInit {
  s = 0;
  m = 0;
  minute = '00';
  second = '00';
  lookToComputer = true;
  lookAway = false;

  ngOnInit() {
    const engine = timer(2000, 1000);
    engine.subscribe(() => this.clock());
  }

  clock() {
    if (this.lookToComputer === true) {
      this.workFunc();
    } else {
      this.lookAwayFunc();
    }
  }

  workFunc() {
    console.log(this);
    // original
    this.s = this.s + 1;
    // test
    // this.s = this.s + 60;
    if ( this.s % 60 === 0) {
      this.s = 0;
      this.second = ('0' + this.s).slice(-2);
      // original
      this.m = this.m + 1;
      // test
      // this.m = this.m + 5;
      this.minute = ('0' + this.m).slice(-2);
      if (this.m % 20 === 0) {
        this.s = 0;
        this.m = 0;
        this.second = '00';
        this.minute = '00';
        this.lookToComputer = false;
        this.lookAway = true;
      }
    }
    this.second = ('0' + this.s).slice(-2);
  }

  lookAwayFunc() {
    console.log('Look Away');
    // original
    this.s = this.s + 1;
    // test
    // this.s = this.s + 1;
    if ( this.s % 20 === 0) {
      this.s = 0;
      this.second = ('0' + this.s).slice(-2);
      this.s = 0;
      this.m = 0;
      this.second = '00';
      this.minute = '00';
      this.lookToComputer = true;
      this.lookAway = false;
    }
    this.second = ('0' + this.s).slice(-2);
  }

  resetClock() {
    this.s = 0;
    this.m = 0;
    this.minute = '00';
    this.second = '00';
    this.lookToComputer = true;
    this.lookAway = false;
  }
}

















