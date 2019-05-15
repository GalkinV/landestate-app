import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {AdvertisementGridComponent} from './advertisment/advertisment-grid/advertisement-grid.component';
import {AddDetailComponent} from './advertisment/add-detail/add-detail.component';

const routes: Routes = [
  { path: '', redirectTo: 'ad', pathMatch: 'full'},
  { path: 'ad', component: AdvertisementGridComponent},
  { path: 'ad/:type', component: AdvertisementGridComponent},
  { path: 'detail/:id', component: AddDetailComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
