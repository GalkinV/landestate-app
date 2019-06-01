import { Component, OnInit } from '@angular/core';
import {Advertisment} from '../../advertisment/advertisment.module';
import {ActivatedRoute, Params} from '@angular/router';
import {AdvertisementService} from '../../advertisment/advertisementService';
import {FormArray, FormControl, FormGroup} from '@angular/forms';

@Component({
  selector: 'app-add-edit',
  templateUrl: './add-edit.component.html',
  styleUrls: ['./add-edit.component.css']
})
export class AddEditComponent implements OnInit {
  private addId: number;
  private add: Advertisment;
  private regions;
  private currencys;
  editMode = false;
  addForm: FormGroup;
  constructor(private route: ActivatedRoute,
              private advertisementService: AdvertisementService) { }

  ngOnInit() {
    this.route.params.subscribe(
      (params: Params) => {
        this.addId = params.id;
        this.add = this.advertisementService.getAdvertisementById(this.addId);
        this.regions = this.advertisementService.getAvailableRegions();
        this.currencys = this.advertisementService.getAvailableCurrency();
        this.editMode = params.id != null;
        this.initForm();
      }
    );
  }

  private initForm() {
    let caption = '';
    let description = '';
    let price = 0;
    let recipeIngredients = new FormArray([]);

    if (this.editMode) {

    }

    this.addForm = new FormGroup({
      'caption': new FormControl(caption),
      'description': new FormControl(description),
      'price': new FormControl(price)
    });
  }

}
