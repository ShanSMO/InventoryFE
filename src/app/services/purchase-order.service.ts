import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Observable} from 'rxjs/Observable';
import {GlobalProperties} from '../global-properties';
import {EndPoints} from '../end-points';
import {HttpReq} from '../http-req';

@Injectable()
export class PurchaseOrderService {

  httpRequest: HttpReq = new HttpReq;

  constructor(private httpClient: HttpClient) { }

  createUpdatePucahseOrder(requestBody: any): Observable<any> {
    const headers = new HttpHeaders({ 'Content-Type': 'application/json' });
    const options = { headers: headers };

    return this.httpClient.post(GlobalProperties.API_URL.concat(EndPoints.CREATE_UPDATE_PURCHASE_ORDER), requestBody, this.httpRequest.options)
      .map((response: Response)  => {
          return response;
        }
      );
  }

  loadAllPucahseOrders(): Observable<any> {
    const headers = new HttpHeaders({ 'Content-Type': 'application/json' });
    const options = { headers: headers };

    return this.httpClient.post(GlobalProperties.API_URL.concat(EndPoints.LOAD_ALL_PURCHASE_ORDERS), {}, this.httpRequest.options)
      .map((response: Response)  => {
          return response;
        }
      );
  }

  // loadPucahseOrderById(id: number): Observable<any> {
  //   const headers = new HttpHeaders({ 'Content-Type': 'application/json' });
  //   const options = { headers: headers };
  //
  //   return this.httpClient.post(GlobalProperties.API_URL.concat(EndPoints.LOAD_CUSTOMER_BY_ID), {id: id}, this.httpRequest.options)
  //     .map((response: Response)  => {
  //         return response;
  //       }
  //     );
  // }

}
