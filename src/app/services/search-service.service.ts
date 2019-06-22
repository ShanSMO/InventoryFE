import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Observable} from 'rxjs/Observable';
import {EndPoints} from '../end-points';
import {GlobalProperties} from '../global-properties';
import {HttpReq} from '../http-req';

@Injectable()
export class SearchServiceService {

  httpRequest: HttpReq = new HttpReq;

  constructor(private httpClient: HttpClient) { }

  searchSuppliers(request): Observable<any> {
    const headers = new HttpHeaders({ 'Content-Type': 'application/json' });
    const options = { headers: headers };

    return this.httpClient.post(GlobalProperties.API_URL.concat(EndPoints.SUPPLIER_SEARCH), request, this.httpRequest.options)
      .map((response: Response)  => {
          return response;
        }
      );
  }

  searchCustomers(request): Observable<any> {
    const headers = new HttpHeaders({ 'Content-Type': 'application/json' });
    const options = { headers: headers };

    return this.httpClient.post(GlobalProperties.API_URL.concat(EndPoints.CUSTOMER_SEARCH), request, this.httpRequest.options)
      .map((response: Response)  => {
          return response;
        }
      );
  }

  searchProducts(request): Observable<any> {
    const headers = new HttpHeaders({ 'Content-Type': 'application/json' });
    const options = { headers: headers };

    return this.httpClient.post(GlobalProperties.API_URL.concat(EndPoints.PRODUCT_SEARCH), request, this.httpRequest.options)
      .map((response: Response)  => {
          return response;
        }
      );
  }

  searchCategory(request): Observable<any> {
    const headers = new HttpHeaders({ 'Content-Type': 'application/json' });
    const options = { headers: headers };

    return this.httpClient.post(GlobalProperties.API_URL.concat(EndPoints.CATEGORY_SEARCH), request, this.httpRequest.options)
      .map((response: Response)  => {
          return response;
        }
      );
  }

  searchSubCategory(request): Observable<any> {
    const headers = new HttpHeaders({ 'Content-Type': 'application/json' });
    const options = { headers: headers };

    return this.httpClient.post(GlobalProperties.API_URL.concat(EndPoints.SUB_CATEGORY_SEARCH), request, this.httpRequest.options)
      .map((response: Response)  => {
          return response;
        }
      );
  }

  searchSales(request): Observable<any> {
    const headers = new HttpHeaders({ 'Content-Type': 'application/json' });
    const options = { headers: headers };

    return this.httpClient.post(GlobalProperties.API_URL.concat(EndPoints.SALES_SEARCH), request, this.httpRequest.options)
      .map((response: Response)  => {
          return response;
        }
      );
  }

  searchPurchaseOrder(request): Observable<any> {
    const headers = new HttpHeaders({ 'Content-Type': 'application/json' });
    const options = { headers: headers };

    return this.httpClient.post(GlobalProperties.API_URL.concat(EndPoints.PO_SEARCH), request, this.httpRequest.options)
      .map((response: Response)  => {
          return response;
        }
      );
  }

  searchStock(request): Observable<any> {
    const headers = new HttpHeaders({ 'Content-Type': 'application/json' });
    const options = { headers: headers };

    return this.httpClient.post(GlobalProperties.API_URL.concat(EndPoints.STOCK_SEARCH), request, this.httpRequest.options)
      .map((response: Response)  => {
          return response;
        }
      );
  }

  searchUser(request): Observable<any> {
    const headers = new HttpHeaders({ 'Content-Type': 'application/json' });
    const options = { headers: headers };

    return this.httpClient.post(GlobalProperties.API_URL.concat(EndPoints.USERS_SEARCH), request, this.httpRequest.options)
      .map((response: Response)  => {
          return response;
        }
      );
  }

}
