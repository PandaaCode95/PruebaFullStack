import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class RequestsService {
  private port:string="3070/"
  private url:string="http://localhost:"+this.port

  constructor(private http:HttpClient) { }

  getNew():Observable<Object>{
    return this.http.get(this.url+"films");
  }
  getPopulares():Observable<Object>{
    return this.http.get(this.url+"popular");
  }
  getFilter(filter:string):Observable<Object>{
    return this.http.get(this.url+"search?filter="+filter);
  }


}

