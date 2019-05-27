import {Component, OnInit} from '@angular/core';
import * as firebase from 'firebase';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'landestate-app';

  ngOnInit() {
    console.log('AppComponent ngOnInit2');
    firebase.initializeApp({
      // apiKey: 'AIzaSyDWb5ie3r1AyMhHkp5-WWqrW3UAa4xu8rM',
      // authDomain: 'landestate-rus.firebaseapp.com'

      apiKey: 'AIzaSyDKyqWgScIwkgpl7pBgqCwt2bp_rxbwc9c',
      authDomain: 'recipebook-galkin.firebaseapp.com'
    });
  }
}
