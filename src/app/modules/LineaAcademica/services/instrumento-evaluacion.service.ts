import { Injectable } from '@angular/core';
import { InstrumentoEvaluacion } from '../models/instrumento-evaluacion';
import { Observable, Subscription, of } from 'rxjs';
import { HttpClient, HttpHeaders, HttpRequest, HttpEvent} from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class InstrumentoEvaluacionService {
  private httpHeaders = new HttpHeaders({ 'Content-Type': 'application/json'});
  private url: string = 'http://localhost:8080/api';
  constructor(private http: HttpClient) { }

  getInstrumentos(): Observable<InstrumentoEvaluacion[]>{
    return this.http.get<InstrumentoEvaluacion[]>(this.url+'/instrumentos');
  }
  getInstrumento(id:number):Observable<Object>{
    return this.http.get(this.url+'/instrumentos/'+id);
  }
  addInstumento(instrumentoEval: InstrumentoEvaluacion): Observable<number>{
    return this.http.post<number>(this.url+'/instrumentos/add', instrumentoEval, {headers:this.httpHeaders});
  }
  
  deleteInstrumento(id: number): Observable<number>{
    return this.http.delete<number>(this.url+"/instrumentos/delete/"+id,{headers:this.httpHeaders});
  }
  updateInstrumento(instrumentoEval: InstrumentoEvaluacion, id:number):Observable<number>{
    return this.http.put<number>(this.url+"/instrumentos/update/"+id, instrumentoEval,{headers:this.httpHeaders});
  }

}
