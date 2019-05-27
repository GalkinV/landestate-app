import { Component, OnInit } from '@angular/core';
import {AuthService} from '../../auth/auth.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-header-menu',
  templateUrl: './header-menu.component.html',
  styleUrls: ['./header-menu.component.css']
})
export class HeaderMenuComponent implements OnInit {

  constructor(private authService: AuthService,
              private router: Router) {
   }

  ngOnInit() {
  }
  onAdmin() {
    console.log('onAdmin');
    if (this.authService.isAuthenticated()) {
      this.router.navigate(['/admin']);
    } else {
      this.router.navigate(['/signin']);
    }
  }
}
