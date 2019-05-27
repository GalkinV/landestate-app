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
    console.log('AppComponent ngOnInit4');
    firebase.initializeApp({

    });
  }
}
