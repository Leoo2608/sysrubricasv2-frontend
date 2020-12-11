import { Injectable } from '@angular/core';
import { DocMetodologia } from '../models/doc-metodologia';
import { Observable, Subscription, of } from 'rxjs';
import { HttpClient, HttpHeaders, HttpRequest, HttpEvent} from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class DocMetodologiaService {

  private httpHeaders = new HttpHeaders({ 'Content-Type': 'application/json'});
  private url: string = 'http://localhost:8080/api';
  constructor(private http: HttpClient) { }

  getMetodologias(): Observable<DocMetodologia[]>{
    return this.http.get<DocMetodologia[]>(this.url+'/documentos');
  }
  getMetodologia(id:number):Observable<Object>{
    return this.http.get(this.url+'/documentos/'+id);
  }
  addMetodologia(docmetodologia: DocMetodologia): Observable<number>{
    return this.http.post<number>(this.url+'/documentos/add', docmetodologia, {headers:this.httpHeaders});
  }
  
  deleteMetodologia(id: number): Observable<number>{
    return this.http.delete<number>(this.url+"/documentos/delete/"+id,{headers:this.httpHeaders});
  }
  updateMetodologia(docmetodologia: DocMetodologia, id:number):Observable<number>{
    return this.http.put<number>(this.url+"/documentos/update/"+id, docmetodologia,{headers:this.httpHeaders});
  }
}
