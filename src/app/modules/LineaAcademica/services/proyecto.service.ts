import { Injectable } from '@angular/core';
import { Proyecto } from '../models/proyecto';
import { Observable, Subscription, of } from 'rxjs';
import { HttpClient, HttpHeaders, HttpRequest, HttpEvent} from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class ProyectoService {
  private httpHeaders = new HttpHeaders({ 'Content-Type': 'application/json'});
  private url: string = 'http://localhost:8080/api';
  constructor(private http: HttpClient) { }

  getProyectos(): Observable<Proyecto[]>{
    return this.http.get<Proyecto[]>(this.url+'/proyectos');
  }
  getProyecto(id:number):Observable<Object>{
    return this.http.get(this.url+'/proyectos/'+id);
  }
  addProyecto(proyecto: Proyecto): Observable<number>{
    return this.http.post<number>(this.url+'/proyectos/add', proyecto, {headers:this.httpHeaders});
  }
  
  deleteProyecto(id: number): Observable<number>{
    return this.http.delete<number>(this.url+"/proyectos/delete/"+id,{headers:this.httpHeaders});
  }
  updateProyecto(proyecto: Proyecto, id:number):Observable<number>{
    return this.http.put<number>(this.url+"/proyectos/update/"+id, proyecto,{headers:this.httpHeaders});
  }
}
