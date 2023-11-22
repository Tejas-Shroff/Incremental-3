import { HttpClient, HttpErrorResponse,HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import {catchError} from 'rxjs/operators';
import { Iplayer } from '../model/iplayer';
import { Iteam } from '../model/iteam';


@Injectable({
  providedIn: 'root'
})
export class AdminService {

  private url = ' https://8080-eccdeabbadafaabfacbbecabcdadeafbbdcaeafe.premiumproject.examly.io/Admin'

  constructor(private httpclient : HttpClient) { }

  showPLayer() : Observable<any[]>{
    return this.httpclient.get<any[]>(this.url + '/showplayers').pipe(catchError(this.handleError));
  }
  showteam() : Observable<any[]>{
    return this.httpclient.get<any[]>(this.url + '/showTeams').pipe(catchError(this.handleError));
  }
  // httpOptions : {headers : new HttpHeaders} ({'content-type' : 'application/json'})

  httpOptions = {headers : new HttpHeaders({'content-type' : 'application/json'})}

  addPlayer( pl : Iplayer ) : Observable<Iplayer>{
    return this.httpclient.post<Iplayer>(this.url + '/AddPlayers',pl ,this.httpOptions)
  }
  addTeams( tl : Iteam ) : Observable<Iteam>{
    return this.httpclient.post<Iteam>(this.url + '/AddTeams',tl ,this.httpOptions)
  }

  handleError (error : HttpErrorResponse) {
    var errmsg = error.status + '\n' + error.statusText + '\n' + error.error
    alert(errmsg)
    return throwError(errmsg)
  }
}
