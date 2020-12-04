import { Injectable } from '@angular/core';
import { LineaAcademica } from '../models/linea-academica';
import { Observable, Subscription, of } from 'rxjs';
import { HttpClient, HttpHeaders, HttpRequest, HttpEvent} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class LineaAcademicaService {
  private httpHeaders = new HttpHeaders({ 'Content-Type': 'application/json'});
  private url: string = 'http://localhost:9090/api';
  constructor(private http: HttpClient) { }
  
  getLineasAcademicas(): Observable<LineaAcademica[]>{
    return this.http.get<LineaAcademica[]>(this.url+'/lineas');
  }
  
  getLineaAcademica(id:number):Observable<Object>{
    return this.http.get(this.url+'/lineas/'+id);
  }

  addLineaAcademica(linea: LineaAcademica): Observable<number>{
    return this.http.post<number>(this.url+'/lineas/add', linea, {headers:this.httpHeaders});
  }
  
  deleteLineaAcademica(id: number): Observable<number>{
    return this.http.delete<number>(this.url+"/lineas/delete/"+id,{headers:this.httpHeaders});
  }
  updateLineaAcademica(linea: LineaAcademica, id:number):Observable<number>{
    return this.http.put<number>(this.url+"/lineas/update/"+id, linea,{headers:this.httpHeaders});
  }
}
