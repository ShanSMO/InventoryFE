import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Observable} from 'rxjs/Observable';
import {GlobalProperties} from '../global-properties';
import {EndPoints} from '../end-points';
import 'rxjs/add/operator/map';
import {HttpReq} from '../http-req';

@Injectable()
export class CustomerService {


  httpRequest: HttpReq = new HttpReq;

  constructor(private httpClient: HttpClient) { }

  createUpdateCustomer(requestBody: any): Observable<any> {
    const headers = new HttpHeaders({ 'Content-Type': 'application/json' });
    const options = { headers: headers };

    return this.httpClient.post(GlobalProperties.API_URL.concat(EndPoints.CREATE_UPDATE_CUSTOMER), requestBody, this.httpRequest.options)
      .map((response: Response)  => {
        return response;
      }
    );
  }

  loadAllCustomers(request): Observable<any> {
    const headers = new HttpHeaders({ 'Content-Type': 'application/json' });
    const options = { headers: headers };

    return this.httpClient.post(GlobalProperties.API_URL.concat(EndPoints.LOAD_ALL_CUSTOMERS), request, this.httpRequest.options)
      .map((response: Response)  => {
          return response;
        }
      );
  }

  loadCustomerById(id: number): Observable<any> {
    const headers = new HttpHeaders({ 'Content-Type': 'application/json' });
    const options = { headers: headers };

    return this.httpClient.post(GlobalProperties.API_URL.concat(EndPoints.LOAD_CUSTOMER_BY_ID), {id: id}, this.httpRequest.options)
      .map((response: Response)  => {
          return response;
        }
      );
  }

  deleteCustomerById(request): Observable<any> {
    const headers = new HttpHeaders({ 'Content-Type': 'application/json' });
    const options = { headers: headers };

    return this.httpClient.post(GlobalProperties.API_URL.concat(EndPoints.DELETE_CUSTOMER), request, this.httpRequest.options)
      .map((response: Response)  => {
          return response;
        }
      );
  }
}
