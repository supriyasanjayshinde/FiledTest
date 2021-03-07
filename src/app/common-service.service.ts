
import { Injectable } from '@angular/core';
import { AdvertisePayment } from './AdvertisePayment.model';
import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';

import { Observable, throwError } from 'rxjs';

import { retry, catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class CommonService {
  constructor(public httpclient: HttpClient) { }

  public ProceedPayment(Data: AdvertisePayment): Observable<any> {
    return this.httpclient.post<AdvertisePayment>("https://localhost:8080/api/users", Data)
      .pipe(
        catchError(this.handleError)
      )
  }

  handleError(error) {
    let errorMessage = '';
    errorMessage ="Error "+ error.message;
    return throwError(errorMessage);
  }
}
