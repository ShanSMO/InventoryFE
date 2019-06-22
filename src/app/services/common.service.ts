import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Observable} from 'rxjs/Observable';
import {EndPoints} from '../end-points';
import {GlobalProperties} from '../global-properties';
import {HttpReq} from '../http-req';

@Injectable()
export class CommonService {

  httpRequest: HttpReq = new HttpReq;

  constructor(private httpClient: HttpClient) { }

  getRecordCount(requestBody , type): Observable<any> {
    const headers = new HttpHeaders({ 'Content-Type': 'application/json' });
    const options = { headers: headers };
    let endPoint ;

    if (type === 'SUPPLIER') {
      endPoint = EndPoints.GET_SUPPLIER_COUNT;
    } else if (type === 'CUSTOMER') {
      endPoint = EndPoints.GET_CUSTOMER_COUNT;
    } else {

    }

    return this.httpClient.post(GlobalProperties.API_URL.concat(endPoint), requestBody, this.httpRequest.options)
      .map((response: Response)  => {
          return response;
        }
      );
  }
}
