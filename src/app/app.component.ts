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
  Users=Array<AdvertisePayment>();
  constructor(private route:Router,private store:UsersStore){
    debugger;
    store.Users$.subscribe(response=>{
      this.Users=response
    })
  }
  AddUsers(){
    this.route.navigate(['/app-advertise']);
  }
}
