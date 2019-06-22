import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Observable} from 'rxjs/Observable';
import {GlobalProperties} from '../global-properties';
import {EndPoints} from '../end-points';
import {HttpReq} from '../http-req';

@Injectable()
export class StatisticService {

  httpRequest: HttpReq = new HttpReq;

  constructor(private httpClient: HttpClient) { }

  load(requestObject): Observable<any> {

    return this.httpClient.post(GlobalProperties.API_URL.concat(EndPoints.STAT_DATA), requestObject, this.httpRequest.options)
      .map((response: Response)  => {
          return response;
        }
      );
  }

  loadChartData(searchRequest): Observable<any> {
    const headers = new HttpHeaders({ 'Content-Type': 'application/json' });
    const options = { headers: headers };

    return this.httpClient.post(GlobalProperties.API_URL.concat(EndPoints.CHART_DATA), searchRequest, this.httpRequest.options)
      .map((response: Response)  => {
          return response;
        }
      );
  }

}
