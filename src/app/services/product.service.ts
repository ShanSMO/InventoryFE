import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Observable} from 'rxjs/Observable';
import {environment} from '../../environments/environment';
import {EndPoints} from '../end-points';
import {HttpReq} from '../http-req';

@Injectable()
export class ProductService {

  httpRequest: HttpReq = new HttpReq;

  constructor(private httpClient: HttpClient) { }

  createUpdate(requestBody: any): Observable<any> {
    const headers = new HttpHeaders({ 'Content-Type': 'application/json' });
    const options = { headers: headers };

    return this.httpClient.post(environment.API_URL.concat(EndPoints.CREATE_UPDATE_PRODUCT), requestBody, this.httpRequest.options)
      .map((response: Response)  => {
          return response;
        }
      );
  }

  loadAll(requestBody): Observable<any> {
    const headers = new HttpHeaders({ 'Content-Type': 'application/json' });
    const options = { headers: headers };

    return this.httpClient.post(environment.API_URL.concat(EndPoints.PRODUCT_LOAD_ALL), requestBody, this.httpRequest.options)
      .map((response: Response)  => {
          return response;
        }
      );
  }

  loadAllByCategory(requestBdoy: any): Observable<any> {
    const headers = new HttpHeaders({ 'Content-Type': 'application/json' });
    const options = { headers: headers };

    return this.httpClient.post(environment.API_URL.concat(EndPoints.LOAD_ALL_PRODUCTS_FOR_CATEGORY_ID), requestBdoy, this.httpRequest.options)
      .map((response: Response)  => {
          return response;
        }
      );
  }

  loadById(requestBody: any): Observable<any> {
    const headers = new HttpHeaders({ 'Content-Type': 'application/json' });
    const options = { headers: headers };

    return this.httpClient.post(environment.API_URL.concat(EndPoints.PRODUCT_LOAD_BY_ID), requestBody, this.httpRequest.options)
      .map((response: Response)  => {
          return response;
        }
      );
  }

  blockProduct(requestBdoy: any): Observable<any> {
    const headers = new HttpHeaders({ 'Content-Type': 'application/json' });
    const options = { headers: headers };

    return this.httpClient.post(environment.API_URL.concat(EndPoints.BLOCK_PRODUCT), requestBdoy, this.httpRequest.options)
      .map((response: Response)  => {
          return response;
        }
      );
  }

  deleteProductById(request): Observable<any> {
    const headers = new HttpHeaders({ 'Content-Type': 'application/json' });
    const options = { headers: headers };

    return this.httpClient.post(environment.API_URL.concat(EndPoints.DELETE_PRODUCT), request, this.httpRequest.options)
      .map((response: Response)  => {
          return response;
        }
      );
  }
}
