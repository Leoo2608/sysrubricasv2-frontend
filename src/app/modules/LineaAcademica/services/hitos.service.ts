import { Injectable } from '@angular/core';
import { Hitos } from '../models/hitos';
import { Observable, Subscription, of } from 'rxjs';
import { HttpClient, HttpHeaders, HttpRequest, HttpEvent} from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class HitosService {

  private httpHeaders = new HttpHeaders({ 'Content-Type': 'application/json'});
  private url: string = 'http://localhost:8080/api';
  constructor(private http: HttpClient) { }

  getHitos(): Observable<Hitos[]>{
    return this.http.get<Hitos[]>(this.url+'/personas');
  }
  getHito(id:number):Observable<Object>{
    return this.http.get(this.url+'/personas/'+id);
  }
  addHito(hitos: Hitos): Observable<number>{
    return this.http.post<number>(this.url+'/personas/add', hitos, {headers:this.httpHeaders});
  }
  
  deleteHito(id: number): Observable<number>{
    return this.http.delete<number>(this.url+"/personas/delete/"+id,{headers:this.httpHeaders});
  }
  updateHito(hitos: Hitos, id:number):Observable<number>{
    return this.http.put<number>(this.url+"/personas/update/"+id, hitos,{headers:this.httpHeaders});
  }

}
