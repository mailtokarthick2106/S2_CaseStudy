import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { USER_CREDENTIALS } from './../../../mock/user-credentials';
import { HttpClient } from '@angular/common/http';
import { AppConfig } from 'src/config/app.config';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class LoginService {
  endpoint: any;
  appConfig: AppConfig

  constructor(private readonly http: HttpClient) {
    this.endpoint = AppConfig.getConfig();
  }

  getUserCredentials(request: any): Observable<any> {
    const headers = {
      'Authorization': 'Basic ' + btoa('devglan-client:devglan-secret'),
      'Content-type': 'application/x-www-form-urlencoded',
	  'Access-Control-Allow-Origin': '*',
	  'Access-Control-Allow-Methods': 'GET, POST, PUT, DELETE, OPTIONS',
	  'Access-Control-Max-Age': '3600'
    }
    return this.http.post<any>(environment.apiUrl +this.endpoint.api.validateUserCredentials, request, {headers});
  }

  login(request: any) {
    const headers = {
      'Authorization': 'Basic ' + btoa('devglan-client:devglan-secret'),
      'Content-type': 'application/x-www-form-urlencoded'
    }
    return this.http.post(environment.apiUrl + 'oauth/token', request, {headers});
  }

  getUsers() {
    return this.http.get(environment.apiUrl + 'user?access_token=' + JSON.parse(window.sessionStorage.getItem('token')).access_token);
  }
}
