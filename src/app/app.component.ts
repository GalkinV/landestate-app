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
    console.log('AppComponent ngOnInit');
    firebase.initializeApp({
      apiKey: 'AIzaSyB2NMJqplcj__OE5znzQnF8qIUf1-9D5sI',
      authDomain: 'landestate-rus.firebaseapp.com',
      storageBucket: "gs://landestate-rus.appspot.com/",
      projectId: "landestate-rus"
    });

  }
}
