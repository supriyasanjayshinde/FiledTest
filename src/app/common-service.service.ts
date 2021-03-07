import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { AdvertisePayment } from './AdvertisePayment.model';

@Injectable({
  providedIn: 'root'
})
export class CommonService {
  constructor(public httpclient: HttpClient) { }

  public ProceedPayment (Data:AdvertisePayment):Observable<any>{
    return this.httpclient.post("",Data);
  }
}
