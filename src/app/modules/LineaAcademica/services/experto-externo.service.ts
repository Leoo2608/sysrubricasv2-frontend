import { Injectable } from '@angular/core';
import { ExpertoExterno } from '../models/experto-externo';
import { Observable, Subscription, of } from 'rxjs';
import { HttpClient, HttpHeaders, HttpRequest, HttpEvent} from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class ExpertoExternoService {
  private httpHeaders = new HttpHeaders({ 'Content-Type': 'application/json'});
  private url: string = 'http://localhost:8080/api';
  constructor(private http: HttpClient) { }

  getExpertos(): Observable<ExpertoExterno[]>{
    return this.http.get<ExpertoExterno[]>(this.url+'/expertoex');
  }
  getExperto(id:number):Observable<Object>{
    return this.http.get(this.url+'/expertoex/'+id);
  }
  addExperto(expertoexterno: ExpertoExterno): Observable<number>{
    return this.http.post<number>(this.url+'/expertoex/add', expertoexterno, {headers:this.httpHeaders});
  }
  
  deleteExperto(id: number): Observable<number>{
    return this.http.delete<number>(this.url+"/expertoex/delete/"+id,{headers:this.httpHeaders});
  }

  updateExperto(expertoexterno: ExpertoExterno, id:number):Observable<number>{
    return this.http.put<number>(this.url+"/expertoex/update/"+id, expertoexterno,{headers:this.httpHeaders});
  }
}
