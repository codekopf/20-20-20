import { Component, OnInit, Inject } from '@angular/core';
import { timer } from 'rxjs/observable/timer';
import { DOCUMENT } from '@angular/platform-browser';


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
  lookAwayText = '';

  constructor(@Inject(DOCUMENT) private _document: HTMLDocument) {}

  ngOnInit() {
    this._document.getElementById('appFavicon').setAttribute('href', '/assets/icon/blue.ico');
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
        this.lookAwayText = 'Look away from the screen!';
        this._document.getElementById('appFavicon').setAttribute('href', '/assets/icon/green.ico');
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
      this.lookAwayText = '';
      this._document.getElementById('appFavicon').setAttribute('href', '/assets/icon/blue.ico');
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
