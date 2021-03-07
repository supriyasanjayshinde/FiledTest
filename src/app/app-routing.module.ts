import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdvertiseComponent } from './advertise/advertise.component';

const routes: Routes = [
  {path:'app-advertise',component:AdvertiseComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }