import { Injectable } from '@angular/core';
import { Http, Response, RequestOptions, Headers } from '@angular/http';

import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import 'rxjs/add/observable/throw';

import { Login } from './login';


@Injectable()
export class LoginService{
  private baseUrl: string = 'http://rasapiuat.nltest.com/api';
  constructor(private http : Http){
  }

  private getHeaders(){
    // I included these headers because otherwise FireFox
    // will request text/html
    let headers = new Headers();
    headers.append('Content-type', 'application/json');
    return headers;
  }
  
  login(loginForm: Login) : Observable<Response>{
    return this
      .http
      .post(`${this.baseUrl}/login`, 
            JSON.stringify(loginForm), 
            {headers: this.getHeaders()});
  }

}



// this could also be a private method of the component class
function handleError (error: any) {
  // log error
  // could be something more sofisticated
  let errorMsg = error.message || `Yikes! There was a problem with our hyperdrive device and we couldn't retrieve your data!`
  console.error(errorMsg);

  // throw an application level error
  return Observable.throw(errorMsg);
}
