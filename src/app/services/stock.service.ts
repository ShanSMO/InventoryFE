import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Observable} from 'rxjs/Observable';
import {environment} from '../../environments/environment';
import {EndPoints} from '../end-points';
import {HttpReq} from '../http-req';

@Injectable()
export class StockService {

  httpRequest: HttpReq = new HttpReq;

  constructor(private httpClient: HttpClient) { }

  loadAll(): Observable<any> {
    const headers = new HttpHeaders({ 'Content-Type': 'application/json' });
    const options = { headers: headers };

    return this.httpClient.post(environment.API_URL.concat(EndPoints.LOAD_STOCK), {}, this.httpRequest.options)
      .map((response: Response)  => {
          return response;
        }
      );
  }

  loadAllAsGroup(request): Observable<any> {
    const headers = new HttpHeaders({ 'Content-Type': 'application/json' });
    const options = { headers: headers };

    return this.httpClient.post(environment.API_URL.concat(EndPoints.LOAD_STOCK_AS_GROUP), request, this.httpRequest.options)
      .map((response: Response)  => {
          return response;
        }
      );
  }

  loadByProduct(request): Observable<any> {
    const headers = new HttpHeaders({ 'Content-Type': 'application/json' });
    const options = { headers: headers };

    return this.httpClient.post(environment.API_URL.concat(EndPoints.LOAD_STOCK_BY_PRODUCT), request, this.httpRequest.options)
      .map((response: Response)  => {
          return response;
        }
      );
  }

}
