import { HttpClientModule } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { ToastrService } from "ngx-toastr";
import { BehaviorSubject, Observable } from "rxjs";
import { AdvertisePayment } from "./AdvertisePayment.model";

@Injectable({
    providedIn: 'root'
})
export class UsersStore {

    
    private subject$=new BehaviorSubject<AdvertisePayment[]>([]);


    Users$ : Observable<AdvertisePayment[]> = this.subject$.asObservable();

    // constructor(initialUsers :AdvertisePayment[]) {
    //     this.subject$=new BehaviorSubject<AdvertisePayment[]>(initialUsers);
    //     this.Users$=this.subject$.asObservable();
    // }

    constructor() {
    }

    loadUsers() {
        // this.httpclient.post("")
    }

     setUsers(nextUsers: AdvertisePayment[]) {
        console.log("----------------------");
        console.log("Previous Users");

        this.subject$.next(nextUsers);

        console.log("----------------------");
        console.log("Current Users");

    }

    get User() {
        return this.subject$.getValue();
    }
}