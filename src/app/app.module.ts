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

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    HeaderMenuComponent,
    AdvertisementGridComponent,
    AddItemComponent,
    AddDetailComponent,
    NgbdCarouselBasicComponent
  ],
  imports: [
    BrowserModule,
    AuthModule,
    AppRoutingModule
  ],
  providers: [
    AuthService,
    AdvertisementService],
  bootstrap: [AppComponent]
})
export class AppModule { }
