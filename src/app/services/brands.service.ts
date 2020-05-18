import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Observable} from 'rxjs/Observable';
import {environment} from '../../environments/environment';
import {EndPoints} from '../end-points';
import {HttpReq} from '../http-req';

@Injectable()
export class BrandsService {

  httpRequest: HttpReq = new HttpReq;

  constructor(private httpClient: HttpClient) { }

  create(request): Observable<any> {
    return this.httpClient.post(environment.API_URL.concat(EndPoints.CREATE_BRANDS), request, this.httpRequest.options)
      .map((response: Response)  => {
          return response;
        }
      );
  }

  loadAll(request): Observable<any> {
    return this.httpClient.post(environment.API_URL.concat(EndPoints.LOAD_ALL_BRANDS), request, this.httpRequest.options)
      .map((response: Response)  => {
          return response;
        }
      );
  }

  loadAllB(): Observable<any> {
    return this.httpClient.post(environment.API_URL.concat(EndPoints.LOAD_ALL_BRANDS_LIST), {}, this.httpRequest.options)
      .map((response: Response)  => {
          return response;
        }
      );
  }

}
