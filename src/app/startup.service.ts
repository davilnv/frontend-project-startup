import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class StartupService {

  url = 'http://localhost'
  port = '8080'
  endpoint = 'startup'


  startupUrl = `${this.url}:${this.port}/${this.endpoint}`;

  constructor(private http: HttpClient) { }

  listStartup() {
    return this.http.get<any[]>(`${this.startupUrl}`)
  }

}
