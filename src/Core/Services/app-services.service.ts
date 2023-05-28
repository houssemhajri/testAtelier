import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../envirment/envirment';
@Injectable({
  providedIn: 'root',
})
export class AppServicesService {
  urlPlayers = `${environment.URL}headtohead.json`;
  constructor(protected httpClient: HttpClient) {}
  getPlayers() {
    return this.httpClient.get(`${this.urlPlayers}`);
  }
}
