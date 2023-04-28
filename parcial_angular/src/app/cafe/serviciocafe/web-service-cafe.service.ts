import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class WebServiceCafeService {
  private democafe = 'assets/informationcafe.json';

  constructor(private http: HttpClient) {}

  headerDefault(): any {
    var headers = new HttpHeaders({
      'Access-Control-Allow-Origin': '*',
    });
    return headers;
  }

  getData(route: string) {
    return this.http.get(this.democafe);
  }
}
