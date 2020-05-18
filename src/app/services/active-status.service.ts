import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Observable} from 'rxjs/Observable';
import {environment} from '../../environments/environment';
import {EndPoints} from '../end-points';
import {HttpReq} from '../http-req';

@Injectable()
export class ActiveStatusService {

  httpRequest: HttpReq = new HttpReq;

  constructor(private httpClient: HttpClient) { }

  loadAll(): Observable<any> {

    return this.httpClient.get(environment.API_URL.concat(EndPoints.STATUS_LOAD_ALL),  this.httpRequest.options)
      .map((response: Response)  => {
          return response;
        }
      );
  }

}
