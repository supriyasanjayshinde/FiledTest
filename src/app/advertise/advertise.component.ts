import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { AdvertisePayment } from '../AdvertisePayment.model';
import { CommonService } from '../common-service.service';
import { UsersStore } from '../Users.store';

@Component({
  selector: 'app-advertise',
  templateUrl: './advertise.component.html',
  styleUrls: ['./advertise.component.css']
})
export class AdvertiseComponent implements OnInit {
  AdvertiseForm:FormGroup;
  constructor(private fb:FormBuilder,private service:CommonService,private route: Router,private toastr: ToastrService,public store:UsersStore) { 
    
  }
  
  ngOnInit(): void {
    this.AdvertiseForm=this.fb.group({
      FirstName : new FormControl(null, [Validators.pattern('[a-zA-Z ]*'),Validators.required]),
      LastName: new FormControl(null, [Validators.pattern('[a-zA-Z ]*'),Validators.required]),
      Email: new FormControl(null,[Validators.required,Validators.pattern('^[a-zA-Z0-9+_.-]+@[a-zA-Z0-9.-]+$')]),
      MonthlyAdvertisingBudget: new FormControl(null,[Validators.required,Validators.pattern('[0-9]*')]),
      Phonenumber: new FormControl(null,[Validators.required,Validators.pattern('[0-9]*')])
    })
  }
  ObjectUser= new AdvertisePayment();
  UserStore= Array<AdvertisePayment>();
  OnPaymentClick(){
    debugger;
    if(this.AdvertiseForm.valid){
      this.toastr.success("Success");
      let data=this.AdvertiseForm.value
      this.UserStore.push(data)
      this.store.setUsers(this.UserStore)
      this.service.ProceedPayment(data).subscribe(response=>{
      })
      this.route.navigate(['\app-root']);
    }
    else{
      this.toastr.error("Please enter all the mandatory values (*)");
    }
  }
}
