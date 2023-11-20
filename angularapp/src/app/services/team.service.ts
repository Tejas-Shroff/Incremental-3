import { Injectable } from '@angular/core';
import {HttpClient} 

@Injectable({
  providedIn: 'root'
})
export class TeamService {

  constructor(private httpclient : HttpClient) { }

}
