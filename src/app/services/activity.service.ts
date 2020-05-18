import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Observable} from 'rxjs/Observable';
import {environment} from '../../environments/environment';
import {EndPoints} from '../end-points';
import {HttpReq} from '../http-req';

@Injectable()
export class ActivityService {

  httpRequest: HttpReq = new HttpReq;

  constructor(private httpClient: HttpClient) { }

  loadAll(requestBody): Observable<any> {

    return this.httpClient.post(environment.API_URL.concat(EndPoints.LOAD_ALL_ACTIVITIES), requestBody, this.httpRequest.options)
      .map((response: Response)  => {
          return response;
        }
      );
  }

}
