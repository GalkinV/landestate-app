import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Params} from '@angular/router';
import {AdvertisementService} from '../advertisementService';
import {Advertisment} from '../advertisment.module';

@Component({
  selector: 'app-add-detail',
  templateUrl: './add-detail.component.html',
  styleUrls: ['./add-detail.component.css']
})
export class AddDetailComponent implements OnInit {
  private addId: number;
  private add: Advertisment;
  constructor(private route: ActivatedRoute,
              private advertisementService: AdvertisementService) { }

  ngOnInit() {
    this.route.params.subscribe(
      (params: Params) => {
        this.addId = params.id;
        this.add = this.advertisementService.getAdvertisementById(this.addId);
      }
    );
  }

}
