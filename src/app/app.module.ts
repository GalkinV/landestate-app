import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { HeaderMenuComponent } from './header/header-menu/header-menu.component';
import {AdvertisementGridComponent} from './advertisment/advertisment-grid/advertisement-grid.component';
import {AdvertisementService} from './advertisment/advertisementService';
import {AddItemComponent} from './advertisment/advertisment-grid/add-item/add-item.component';
import {AddDetailComponent} from './advertisment/add-detail/add-detail.component';
import { NgbdCarouselBasicComponent } from './advertisment/ngbd-carousel-basic/ngbd-carousel-basic.component';
import {AuthModule} from './auth/auth.module';
import {AuthService} from './auth/auth.service';
import { AddListComponent } from './admin/add-list/add-list.component';
import { AddEditComponent } from './admin/add-edit/add-edit.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { UploadFormComponent } from './admin/uploads/upload-form/upload-form.component';
import { environment } from 'src/environments/environment.prod';
import * as firebase from 'firebase';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    HeaderMenuComponent,
    AdvertisementGridComponent,
    AddItemComponent,
    AddDetailComponent,
    NgbdCarouselBasicComponent,
    AddListComponent,
    AddEditComponent,
    UploadFormComponent
  ],
  imports: [
    BrowserModule,
    AuthModule,
    FormsModule,
    ReactiveFormsModule,
    AppRoutingModule
  ],
  providers: [
    // AuthService,
    AdvertisementService ],
  bootstrap: [AppComponent]
})
export class AppModule { }
