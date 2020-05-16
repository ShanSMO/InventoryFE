import {HttpHeaders, HttpParams} from '@angular/common/http';

export class HttpReq {

  public options = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' }),
    params: new HttpParams().set('access_token',  localStorage.getItem('access_token')) };

  public optionsAnyUser = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })};

}
