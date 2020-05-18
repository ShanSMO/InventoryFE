import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {EndPoints} from '../end-points';
import {environment} from '../../environments/environment';
import {Observable} from 'rxjs/Observable';
import {HttpReq} from '../http-req';

@Injectable()
export class CompanyService {

  httpRequest: HttpReq = new HttpReq;

  constructor(private httpClient: HttpClient) { }

  create(request): Observable<any> {
    const headers = new HttpHeaders({ 'Content-Type': 'application/json' });
    const options = { headers: headers };

    return this.httpClient.post(environment.API_URL.concat(EndPoints.CREATE_COMPANY), request, this.httpRequest.optionsAnyUser)
      .map((response: Response)  => {
          return response;
        }
      );
  }

  update(request): Observable<any> {
    const headers = new HttpHeaders({ 'Content-Type': 'application/json' });
    const options = { headers: headers };

    return this.httpClient.post(environment.API_URL.concat(EndPoints.UPDATE_COMPANY), request, this.httpRequest.options)
      .map((response: Response)  => {
          return response;
        }
      );
  }

  loadById(request): Observable<any> {
    const headers = new HttpHeaders({ 'Content-Type': 'application/json' });
    const options = { headers: headers };

    return this.httpClient.post(environment.API_URL.concat(EndPoints.LOAD_COMPANY_BY_ID), request, this.httpRequest.options)
      .map((response: Response)  => {
          return response;
        }
      );
  }
}
