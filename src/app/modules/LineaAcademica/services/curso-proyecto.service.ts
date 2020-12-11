import { Injectable } from '@angular/core';
import { CursoProyecto } from '../models/curso-proyecto';
import { Observable, Subscription, of } from 'rxjs';
import { HttpClient, HttpHeaders, HttpRequest, HttpEvent} from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class CursoProyectoService {

  private httpHeaders = new HttpHeaders({ 'Content-Type': 'application/json'});
  private url: string = 'http://localhost:8080/api';
  constructor(private http: HttpClient) { }

  getCursoProyectos(): Observable<CursoProyecto[]>{
    return this.http.get<CursoProyecto[]>(this.url+'/cursosproy');
  }
  getCursoProyecto(id:number):Observable<Object>{
    return this.http.get(this.url+'/cursosproy/'+id);
  }
  addCursoProyecto(cursoproyecto: CursoProyecto): Observable<number>{
    return this.http.post<number>(this.url+'/cursosproy/add', cursoproyecto, {headers:this.httpHeaders});
  }
  
  deleteCursoProyecto(id: number): Observable<number>{
    return this.http.delete<number>(this.url+"/cursosproy/delete/"+id,{headers:this.httpHeaders});
  }
  updateCursoProyecto(cursoproyecto: CursoProyecto, id:number):Observable<number>{
    return this.http.put<number>(this.url+"/cursosproy/update/"+id, cursoproyecto,{headers:this.httpHeaders});
  }
}
