import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class WebServiceCafeService {
  private democafe = 'assets/informationcafe.json';
  private url = "https://gist.githubusercontent.com/josejbocanegra/e9d24db370ce95b75555f7d1f8691805/raw/8a26ac2bca4183dc88545e14c45851d698911358/202212_MISW4104_Grupo3.json";
  constructor(private http: HttpClient) {}

  getData() {
    return this.http.get(this.url);
  }
}
