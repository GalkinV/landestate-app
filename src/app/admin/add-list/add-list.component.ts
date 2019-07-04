import { Component, OnInit } from '@angular/core';
import {AdvertisementService} from '../../advertisment/advertisementService';
import {Advertisment} from '../../advertisment/advertisment.module';
import {Subscription} from 'rxjs';
import {Router} from '@angular/router';

@Component({
  selector: 'app-add-list',
  templateUrl: './add-list.component.html',
  styleUrls: ['./add-list.component.css']
})
export class AddListComponent implements OnInit {

  subscription: Subscription;

  advertisements: Advertisment[];
  constructor(private advertisementService: AdvertisementService,
              private router: Router) { }

  ngOnInit() {
    this.subscription = this.advertisementService.advertisementChanged
      .subscribe(
        (advertisments: Advertisment[]) => {
          this.advertisements = advertisments;
        }
      );

    this.advertisements = this.advertisementService.getAllAdvertisments();
  }

  onChangeAdd(id: number) {
    console.log('Change ' + id);
    this.router.navigate(['/admin/edit', id]);
  }

  onDeleteAdd(id: number) {
    console.log('Delete ' + id);
    this.advertisementService.delAdvertisementById(id);
  }

  onNewClick() {
    this.router.navigate(['/admin/new']);
  }
}
