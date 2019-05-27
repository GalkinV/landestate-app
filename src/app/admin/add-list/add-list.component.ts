import { Component, OnInit } from '@angular/core';
import {AdvertisementService} from '../../advertisment/advertisementService';
import {Advertisment} from '../../advertisment/advertisment.module';

@Component({
  selector: 'app-add-list',
  templateUrl: './add-list.component.html',
  styleUrls: ['./add-list.component.css']
})
export class AddListComponent implements OnInit {

  advertisements: Advertisment[];
  constructor(private advertisementService: AdvertisementService) { }

  ngOnInit() {
    this.advertisements = this.advertisementService.getAllAdvertisments();
  }

  onChangeAdd(id: number) {
    console.log('Change ' + id);

}
}
