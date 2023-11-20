import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common'

@Injectable({
  providedIn: 'root'
})
export class TeamService {

  constructor(private httpclient : HttpClient) { }

}
