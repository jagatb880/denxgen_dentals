import { Injectable } from '@angular/core';
import { HttpClient, HttpParams, HttpHeaders, HttpRequest, HttpEventType } from '@angular/common/http';
import { environment } from '../../environments/environment';
import { map, catchError } from 'rxjs/operators';
import { throwError, Observable } from 'rxjs';


@Injectable({
  providedIn: 'root',
})

export class HttpService {

  authToken: any;
  constructor(public http: HttpClient,) {
  }

  get(url: string, params?: HttpParams, headers?: HttpHeaders): Observable<any> {
    return this.http.get(`${environment.domain + url}`, { headers, params }).pipe(
      map((res) => res),
      catchError((err) => throwError(err))
    );
  }

  delete(url: string, params?: HttpParams, headers?: HttpHeaders): Observable<any> {
    return this.http.delete(`${environment.domain + url}`, { headers, params }).pipe(
      map((res) => res),
      catchError((err) => throwError(err))
    );
  }

  post(url: string, body: any, params?: HttpParams, headers?: HttpHeaders): Observable<any> {
    return this.http.post(`${environment.domain + url}`, body, { headers, params }).pipe(
      map((res) => res),
      catchError((err) => throwError(err))
    );
  }

  getWithToken(url: string, authToken?: any): Observable<any> {
    console.log(authToken)
    let header = new HttpHeaders().set(
      'Authorization', `Bearer ${authToken}`
    )
    
    return this.http.get(`${environment.domain + url}`, {headers:header}  ).pipe(
      map((res) => res),
      catchError((err) => throwError(err))
    );
  }

  postWithToken(url: string, body: any, authToken?: any): Observable<any> {
    console.log(authToken) 
    var httpOptions = {
      headers: new HttpHeaders({
        'Content-type': 'application/json',
        'Authorization': `Bearer ${authToken}`
      })
    };
    return this.http.post(`${environment.domain + url}`, body, httpOptions  ).pipe(
      map((res) => res),
      catchError((err) => throwError(err))
    );
  }
}