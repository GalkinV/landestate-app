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
    const imagePath = new FormArray([]);
    let id = 0;
   // 

    if (this.editMode) {
      caption = this.add.caption;
      description = this.add.description;
      price = this.add.price;
      currency = this.add.currency;
      region = this.add.region;
      phone = this.add.phone;
      if(this.add.imagePath) {
        for(let image of this.add.imagePath) {
          imgFilesList.push(
            new FormControl(image)
          );
        }
      }
      id = this.add.id;
    }


    this.addForm = new FormGroup({
      'caption': new FormControl(caption),
      'description': new FormControl(description),
      'price': new FormControl(price),
      'currency': new FormControl(currency),
      'region': new FormControl(region),
      'phone': new FormControl(phone),
      imagePath: imgFilesList,
      'id': new FormControl(id)
    });

    console.log(this.addForm);

   // this.addImageSelectElement();
  }

  upload(event) {
 
    console.log(this.addId);
    // const randomId = Math.random().toString(36).substring(2);
    // console.log(randomId);
    let uploadTask = firebase.storage().ref(event.target.files[0].name).put(event.target.files[0]);

    let myVar = this;

    uploadTask.on('state_changed', 
        function(snapshot){  }, 
        function(error) { console.log(error);  },
        function() {
          
          uploadTask.snapshot.ref.getDownloadURL().then(downloadURL => {
          console.log('File available at', downloadURL);
          
          (<FormArray> myVar.addForm.get('imagePath')).push(
            new FormControl(downloadURL)
          );
          
        });
    });


     console.log(event);
    
     this.addImageSelectElement();
  
  }

  addImageSelectElement() {
    // (<FormArray> this.addForm.get('ImgFiles')).push(
    //     new FormControl(null)
    // );
  }


  addImageSelectElementValue(path: string) {
    // (<FormArray> this.addForm.get('ImgFiles')).push(
    //     new FormControl(path)
    // );
  }

  getControls() {
   // console.log((<FormArray> this.addForm.get('imagePath')).controls);
    return (<FormArray> this.addForm.get('imagePath')).controls;
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
