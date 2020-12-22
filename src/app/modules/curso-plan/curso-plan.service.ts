import { Injectable } from '@angular/core';
import { Observable, Subscription, of } from 'rxjs';
import { HttpClient, HttpHeaders, HttpRequest, HttpEvent} from '@angular/common/http';
import { CursoPlan } from './curso-plan';
import { PlanAcademico } from './plan-academico';
@Injectable({
  providedIn: 'root'
})
export class CursoPlanService {
  private httpHeaders = new HttpHeaders({ 'Content-Type': 'application/json'});
  private url: string = 'http://localhost:9090/curso_plan';
  private urlcurso: string = 'http://localhost:9090/curso';


  constructor(private http: HttpClient) { }
  getCursoPlanes(): Observable<CursoPlan[]>{
    return this.http.get<CursoPlan[]>(this.url+'/lista');
  }
  getPlanesAcademicos(): Observable<PlanAcademico[]>{
    return this.http.get<PlanAcademico[]>('http://localhost:9090/api/planes');
  }
  getCursoPlan(id:number):Observable<Object>{
    return this.http.get(`${this.url}/${id}`);
  }

  addCursoPlan(curso: CursoPlan): Observable<number>{
    return this.http.post<number>(this.url+'/add', curso, {headers:this.httpHeaders});
  }
  
  deleteCursoPlan(id: number): Observable<number>{
    return this.http.delete<number>(this.url+"/delete/"+id,{headers:this.httpHeaders});
  }
  updateCursoPlan( curso:CursoPlan,id:number):Observable<number>{
    return this.http.put<number>(this.url+"/update/"+id, curso,{headers:this.httpHeaders});
  }
  getPlanesAcademicosxUnidad(id:number): Observable<PlanAcademico[]>{
    return this.http.get<PlanAcademico[]>('http://localhost:9090/api/planes/xunidad/'+id);
  }
  getCampus(): Observable<Object[]>{
    return this.http.get<Object[]>('http://localhost:9090/api/unidad/campus');
  }
  getFacultad(nom:string):Observable<Object[]>{
    return this.http.get<Object[]>('http://localhost:9090/api/unidad/campus/'+nom);
  }
  getEscuela(id:number):Observable<Object[]>{
    return this.http.get<Object[]>('http://localhost:9090/api/unidad/escuela/'+id);
  }
  getcpp(id : number) : Observable<Object[]>{
    return this.http.get<Object[]>(this.url + '/cpp/' + id);
  }
}
