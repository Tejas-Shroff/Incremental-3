import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AdminService {

  private url = 'https://8080-eccdeabbadafaabfacbbecabcdadeafbbdcaeafe.premiumproject.examly.io/admin';

  constructor(private httpclient : HttpClient) { }
}
