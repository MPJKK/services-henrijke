import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';

@Injectable()
export class DigitransitService {
  apiURL = 'https://api.digitransit.fi/routing/v1/routers/hsl/index/graphql';

  constructor( private http: HttpClient) { }

  getRoutes (pysakki) {
      const body = `{
  stops(name: "${pysakki}") {
    name
    lat
    lon
    desc
  }
}`;
      const headers = {
          headers: new HttpHeaders().set('Content-type', 'application/graphql')
      };
      interface ReittiData {
          data: Object;
      }
    return this.http.post<ReittiData>(this.apiURL, body, headers);
  }
}
ç