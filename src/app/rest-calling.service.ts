import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { environment } from './../environments/environment';

@Injectable()
export class RestCallingService {

  constructor(private http: Http) { }

  authenticateUser(userName: string, password: string) {
    return this.http.post('https://reqres.in/api/login', {email: userName, password: password});
  }

  getAllUser() {
    return this.http.get('https://reqres.in/api/users?page=3');
  }
}
