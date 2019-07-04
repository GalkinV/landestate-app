import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {AdvertisementGridComponent} from './advertisment/advertisment-grid/advertisement-grid.component';
import {AddDetailComponent} from './advertisment/add-detail/add-detail.component';
import {AddListComponent} from './admin/add-list/add-list.component';
import {AuthGuardService} from './auth/auth-guard.service';
import {AuthService} from './auth/auth.service';
import {AddEditComponent} from './admin/add-edit/add-edit.component';

const routes: Routes = [
  { path: '', redirectTo: 'ad', pathMatch: 'full'},
  { path: 'ad', component: AdvertisementGridComponent},
  { path: 'ad/:region', component: AdvertisementGridComponent},
  { path: 'detail/:id', component: AddDetailComponent},
  { path: 'admin', component: AddListComponent, canActivate: [AuthGuardService]},
  { path: 'admin/edit/:id', component: AddEditComponent, canActivate: [AuthGuardService]},
  { path: 'admin/new', component: AddEditComponent, canActivate: [AuthGuardService]}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  providers: [
    AuthService,
    AuthGuardService

  ]
})
export class AppRoutingModule { }
