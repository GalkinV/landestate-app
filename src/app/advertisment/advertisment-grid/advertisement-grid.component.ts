import { Component, OnInit } from '@angular/core';
import {AdvertisementService} from '../advertisementService';
import {Advertisment} from '../advertisment.module';
import {ActivatedRoute, Params} from '@angular/router';

@Component({
  selector: 'app-advertisment-grid',
  templateUrl: './advertisement-grid.component.html',
  styleUrls: ['./advertisement-grid.component.css']
})
export class AdvertisementGridComponent implements OnInit {

  advertisements: Advertisment[];
  adType: string;

  constructor(private advertisementService: AdvertisementService,
              private route: ActivatedRoute) { }

  ngOnInit() {
    this.route.params.subscribe(
      (params: Params) => {
        this.adType = params.type;
        if (params.type === 'all') {
          this.advertisements = this.advertisementService.getAllAdvertisments();
        } else {
          this.advertisements = this.advertisementService.getAdvertisementsByType(this.adType);
        }
      }
    );

  }
}


