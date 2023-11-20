import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http'
import { Observable } from 'rxjs';
import { Iteam } from '../model/iteam';

@Injectable({
  providedIn: 'root'
})
export class TeamService {

  private url = 'https://8080-eccdeabbadafaabfacbbecabcdadeafbbdcaeafe.premiumproject.examly.io/Admin'

  constructor(private httpclient : HttpClient) { }

  getAllTeams() : Observable<Iteam[]>{
    return this.httpclient.get<Iteam[]>(this.url +'/ListTeam');
  }

  getTeam(id : number) : Observable<Iteam>{
    return this.httpclient.get<Iteam>(this.url + '/ListTeam' +id);
  }


}
