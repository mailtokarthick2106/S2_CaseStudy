import { Injectable } from '@angular/core';
import { AppConfig } from 'src/config/app.config';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class SignupService {

  endpoint: any;
  appConfig: AppConfig

  constructor(private readonly http: HttpClient) {
    this.endpoint = AppConfig.getConfig();
  }

  createNewUser(request: any): Observable<any> {
    return this.http.post<any>(environment.apiUrl+this.endpoint.api.createNewUser, request);
  }
}
