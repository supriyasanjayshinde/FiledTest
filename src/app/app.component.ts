import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AdvertisePayment } from './AdvertisePayment.model';
import { UsersStore } from './Users.store';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Filed';
  shwAdd:boolean=true;
  Users=Array<AdvertisePayment>();
  constructor(private route:Router,private store:UsersStore){
    debugger;
    store.Users$.subscribe(response=>{
      this.Users=response
    })
  }
  // RouteToAdvertise(){
  //   debugger;
    
  // }
  AddUsers(){
    this.shwAdd=false;
    this.route.navigate(['/app-advertise']);
  }
}
