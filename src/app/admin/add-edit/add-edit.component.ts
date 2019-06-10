import { Component, OnInit } from '@angular/core';
import {Advertisment} from '../../advertisment/advertisment.module';
import {ActivatedRoute, Params, Router} from '@angular/router';
import {AdvertisementService} from '../../advertisment/advertisementService';
import {FormArray, FormControl, FormGroup} from '@angular/forms';
import * as firebase from 'firebase';

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
               private advertisementService: AdvertisementService,
               private router: Router) { }

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
    let currency = '';
    let region = '';
    let phone = [];
    let imgFilesList = new FormArray([]);
    const imgFiles = new FormArray([]);
   // 

    if (this.editMode) {
      caption = this.add.caption;
      description = this.add.description;
      price = this.add.price;
      currency = this.add.currency;
      region = this.add.type;
      phone = this.add.phone;
    }

    this.addForm = new FormGroup({
      'caption': new FormControl(caption),
      'description': new FormControl(description),
      'price': new FormControl(price),
      'currency': new FormControl(currency),
      'region': new FormControl(region),
      'phone': new FormControl(phone),
      ImgFiles: imgFilesList
    });

    this.addImageSelectElement();
  }

  upload(event) {
    // const randomId = Math.random().toString(36).substring(2);
    // console.log(randomId);
    firebase.storage().ref(event.target.files[0].name).put(event.target.files[0]);
    console.log(event);
    this.addImageSelectElement();
  
  }

  addImageSelectElement() {
    (<FormArray> this.addForm.get('ImgFiles')).push(
      new FormGroup({
        imgFile: new FormControl(null)
      })
    );
  }

  getControls() {
    return (<FormArray> this.addForm.get('ImgFiles')).controls;
  }

  onSubmit() {

    if (this.editMode) {
      // this.recipeService.updateRecipe(this.id, this.recipeForm.value);
      console.log(this.addForm.value);
      this.advertisementService.saveAdvertisement(this.addId, this.addForm.value);
    } else {
     //  this.recipeService.addRecipe(this.recipeForm.value);
    }
    this.onCancel();
  }

  onCancel() {
    this.router.navigate(['../'], {relativeTo: this.route});
  }



}
