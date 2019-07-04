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
    else {
      id = Math.floor(Math.random() * 2147483647);
      this.addId = id;
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
 

    // const randomId = Math.random().toString(36).substring(2);
 
    for(let file of event.target.files) {
      console.log(file.name);

    let uploadTask = firebase.storage().ref(file.name).put(file);

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
    }

//     console.log(event);
    
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

    console.log('___onSubmit___');
    console.log(this.addForm.value);
    if (this.editMode) {     
      this.advertisementService.saveAdvertisement(this.addId, this.addForm.value);
    } else {
      this.advertisementService.saveAdvertisement(this.addId, this.addForm.value);
    }
    this.onCancel();
  }

  onCancel() {
    console.log('___onCancel___');
   // this.router.navigate(['../../'], {relativeTo: this.route});
  }

  onDeleteImage(n: string) {
    console.log('_____onDeleteImage_____');
    console.log(n);

    // Create a reference to the file to delete
    let desertRef = firebase.storage().refFromURL('https://firebasestorage.googleapis.com/v0/b/landestate-rus.appspot.com/o/obj36.jpg');
    console.log(desertRef);

    // Delete the file
    // desertRef.delete().then(function() {
    //   console.log( 'File deleted successfully');
    // }).catch(function(error) {
    //   console.log( 'Uh-oh, an error occurred');
    // });


  }

}
