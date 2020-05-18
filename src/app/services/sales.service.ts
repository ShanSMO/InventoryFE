import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Observable} from 'rxjs/Observable';
import {environment} from '../../environments/environment';
import {EndPoints} from '../end-points';
import {HttpReq} from '../http-req';

@Injectable()
export class SalesService {

  httpRequest: HttpReq = new HttpReq;

  constructor(private httpClient: HttpClient) { }

  createUpdate(requestBody: any): Observable<any> {
    const headers = new HttpHeaders({ 'Content-Type': 'application/json' });
    const options = { headers: headers };

    return this.httpClient.post(environment.API_URL.concat(EndPoints.CREATE_UPDATE_SALE), requestBody, this.httpRequest.options)
      .map((response: Response)  => {
          return response;
        }
      );
  }

  loadAll(): Observable<any> {
    const headers = new HttpHeaders({ 'Content-Type': 'application/json' });
    const options = { headers: headers };

    return this.httpClient.post(environment.API_URL.concat(EndPoints.LOAD_ALL_SALES), {}, this.httpRequest.options)
      .map((response: Response)  => {
          return response;
        }
      );
  }

  loadByBarcode(requestBody): Observable<any> {
    const headers = new HttpHeaders({ 'Content-Type': 'application/json' });
    const options = { headers: headers };

    return this.httpClient.post(environment.API_URL.concat(EndPoints.LOAD_BY_BARCODE), requestBody, this.httpRequest.options)
      .map((response: Response)  => {
          return response;
        }
      );
  }

  loadById(requestBody): Observable<any> {
    const headers = new HttpHeaders({ 'Content-Type': 'application/json' });
    const options = { headers: headers };

    return this.httpClient.post(environment.API_URL.concat(EndPoints.SALE_LOAD_BY_ID), requestBody, this.httpRequest.options)
      .map((response: Response)  => {
          return response;
        }
      );
  }

}
