import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {AdvertisementGridComponent} from './advertisment/advertisment-grid/advertisement-grid.component';
import {AddDetailComponent} from './advertisment/add-detail/add-detail.component';
import {AddListComponent} from './admin/add-list/add-list.component';
import {AuthGuardService} from './auth/auth-guard.service';
import {AuthService} from './auth/auth.service';

const routes: Routes = [
  { path: '', redirectTo: 'ad', pathMatch: 'full'},
  { path: 'ad', component: AdvertisementGridComponent},
  { path: 'ad/:type', component: AdvertisementGridComponent},
  { path: 'detail/:id', component: AddDetailComponent},
  { path: 'admin', component: AddListComponent, canActivate: [AuthGuardService]},
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
