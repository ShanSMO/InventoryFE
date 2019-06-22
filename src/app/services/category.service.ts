import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Observable} from 'rxjs/Observable';
import {GlobalProperties} from '../global-properties';
import {EndPoints} from '../end-points';
import {HttpReq} from '../http-req';

@Injectable()
export class CategoryService {

  httpRequest: HttpReq = new HttpReq;

  constructor(private httpClient: HttpClient) { }

  createUpdate(requestBody: any): Observable<any> {
    const headers = new HttpHeaders({ 'Content-Type': 'application/json' });
    const options = { headers: headers };

    return this.httpClient.post(GlobalProperties.API_URL.concat(EndPoints.CREATE_UPDATE_CATEGORY), requestBody, this.httpRequest.options)
      .map((response: Response)  => {
          return response;
        }
      );
  }

  createUpdateSub(requestBody: any): Observable<any> {
    const headers = new HttpHeaders({ 'Content-Type': 'application/json' });
    const options = { headers: headers };

    return this.httpClient.post(GlobalProperties.API_URL.concat(EndPoints.CREATE_UPDATE_SUB_CATEGORY), requestBody, this.httpRequest.options)
      .map((response: Response)  => {
          return response;
        }
      );
  }

  loadAll(request): Observable<any> {
    const headers = new HttpHeaders({ 'Content-Type': 'application/json' });
    const options = { headers: headers };

    return this.httpClient.post(GlobalProperties.API_URL.concat(EndPoints.CATEGORY_LOAD_ALL), request, this.httpRequest.options)
      .map((response: Response)  => {
          return response;
        }
      );
  }

  loadAllSubCategories(request): Observable<any> {
    const headers = new HttpHeaders({ 'Content-Type': 'application/json' });
    const options = { headers: headers };

    return this.httpClient.post(GlobalProperties.API_URL.concat(EndPoints.SUB_CATEGORY_LOAD_ALL), request, this.httpRequest.options)
      .map((response: Response)  => {
          return response;
        }
      );
  }

  removeCategory(request): Observable<any> {
    const headers = new HttpHeaders({ 'Content-Type': 'application/json' });
    const options = { headers: headers };

    return this.httpClient.post(GlobalProperties.API_URL.concat(EndPoints.CATEGORY_REMOVE), request, this.httpRequest.options)
      .map((response: Response)  => {
          return response;
        }
      );
  }

  removeSubCategory(request): Observable<any> {
    const headers = new HttpHeaders({ 'Content-Type': 'application/json' });
    const options = { headers: headers };

    return this.httpClient.post(GlobalProperties.API_URL.concat(EndPoints.SUB_CATEGORY_REMOVE), request, this.httpRequest.options)
      .map((response: Response)  => {
          return response;
        }
      );
  }

}
