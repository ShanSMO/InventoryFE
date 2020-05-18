import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Observable} from 'rxjs/Observable';
import {environment} from '../../environments/environment';
import {EndPoints} from '../end-points';

@Injectable()
export class UserService {

  constructor(private httpClient: HttpClient) { }

  login(request): Observable<any> {
    const headers = new HttpHeaders({ 'Content-Type': 'application/json' });
    const options = { headers: headers };

    return this.httpClient.post(environment.API_URL.concat(EndPoints.USER_LOGIN), request, options)
      .map((response: Response)  => {
          return response;
        }
      );
  }

  create(request): Observable<any> {
    const headers = new HttpHeaders({ 'Content-Type': 'application/json' });
    const options = { headers: headers };

    return this.httpClient.post(environment.API_URL.concat(EndPoints.USER_CREATE), request, options)
      .map((response: Response)  => {
          return response;
        }
      );
  }

  loadByCompany(request): Observable<any> {
    const headers = new HttpHeaders({ 'Content-Type': 'application/json' });
    const options = { headers: headers };

    return this.httpClient.post(environment.API_URL.concat(EndPoints.LOAD_BY_COMPANY), request, options)
      .map((response: Response)  => {
          return response;
        }
      );
  }
}
