import { Injectable } from '@angular/core';
import {EndPoints} from '../end-points';
import {GlobalProperties} from '../global-properties';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Observable} from 'rxjs/Observable';
import {HttpReq} from '../http-req';

@Injectable()
export class SupplierService {

  httpRequest: HttpReq = new HttpReq;

  constructor(private httpClient: HttpClient) { }

  createUpdateSupplier(requestBody: any): Observable<any> {
    const headers = new HttpHeaders({ 'Content-Type': 'application/json' });
    const options = { headers: headers };

    return this.httpClient.post(GlobalProperties.API_URL.concat(EndPoints.CREATE_UPDATE_SUPPLIER), requestBody, this.httpRequest.options)
      .map((response: Response)  => {
          return response;
        }
      );
  }

  loadAllSuppliers(request): Observable<any> {
    const headers = new HttpHeaders({ 'Content-Type': 'application/json' });
    const options = { headers: headers };

    return this.httpClient.post(GlobalProperties.API_URL.concat(EndPoints.LOAD_ALL_SUPPLIER), request, this.httpRequest.options)
      .map((response: Response)  => {
          return response;
        }
      );
  }

  loadSupplierById(id: number): Observable<any> {
    const headers = new HttpHeaders({ 'Content-Type': 'application/json' });
    const options = { headers: headers };

    return this.httpClient.post(GlobalProperties.API_URL.concat(EndPoints.LOAD_SUPPLIER_BY_ID), {id: id}, this.httpRequest.options)
      .map((response: Response)  => {
          return response;
        }
      );
  }

  deleteSupplierById(request): Observable<any> {
    const headers = new HttpHeaders({ 'Content-Type': 'application/json' });
    const options = { headers: headers };

    return this.httpClient.post(GlobalProperties.API_URL.concat(EndPoints.DELETE_SUPPLIER), request, this.httpRequest.options)
      .map((response: Response)  => {
          return response;
        }
      );
  }

}
