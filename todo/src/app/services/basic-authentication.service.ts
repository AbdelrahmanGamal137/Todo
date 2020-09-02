import { Injectable } from '@angular/core';
import { HttpHeaders, HttpClient } from '@angular/common/http';
import { AuthenticationBean } from '../models/AuthenticationBean';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class BasicAuthenticationService {

  constructor(private http: HttpClient) { }

  excuteAuthenticationService(username, password) {
    let basicAuthHeaderString = 'Basic ' + window.btoa(username + ':' + password);

    let headers = new HttpHeaders({
      Authorization: basicAuthHeaderString
    })

    return this.http.get<AuthenticationBean>
      (`http://localhost:8082/basicauth`, { headers }).pipe(
        map(data => {
          console.log("--------");
          sessionStorage.setItem('authenticatedUser', username);
          sessionStorage.setItem('token', basicAuthHeaderString);
          return data;
        }))
  }

  getAuthenticatedUser() {
    return sessionStorage.getItem('authenticatedUser');
  }

  getAuthenticatedToken() {
    if (this.getAuthenticatedUser)
      return sessionStorage.getItem('token');
  }

  isUserLogedIn() {
    let user = sessionStorage.getItem('authenticatedUser');
    return !(user === null);
  }

  logout() {
    sessionStorage.removeItem('authenticatedUser');
    sessionStorage.removeItem('token');
  }
}
