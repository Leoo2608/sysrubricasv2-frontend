import { Injectable } from '@angular/core';
import { Evaluador } from '../models/evaluador';
import { Observable, Subscription, of } from 'rxjs';
import { HttpClient, HttpHeaders, HttpRequest, HttpEvent} from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class EvaluadorService {
  private httpHeaders = new HttpHeaders({ 'Content-Type': 'application/json'});
  private url: string = 'http://localhost:8080/api';
  constructor(private http: HttpClient) { }

  getEvaluadores(): Observable<Evaluador[]>{
    return this.http.get<Evaluador[]>(this.url+'/evaluadores');
  }
  getEvaluador(id:number):Observable<Object>{
    return this.http.get(this.url+'/evaluadores/'+id);
  }

  addEvaluador(evaluador: Evaluador): Observable<number>{
    return this.http.post<number>(this.url+'/evaluadores/add', evaluador, {headers:this.httpHeaders});
  }
  deleteEvaluador(id: number): Observable<number>{
    return this.http.delete<number>(this.url+"/evaluadores/delete/"+id,{headers:this.httpHeaders});
  }
  updateEvaluador(evaluador: Evaluador, id:number):Observable<number>{
    return this.http.put<number>(this.url+"/evaluadores/update/"+id, evaluador,{headers:this.httpHeaders});
  }
}
