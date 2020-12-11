import { Injectable } from '@angular/core';
import { Semestre } from '../models/semestre';
import { Observable, Subscription, of } from 'rxjs';
import { HttpClient, HttpHeaders, HttpRequest, HttpEvent} from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class SemestreService {
  private httpHeaders = new HttpHeaders({ 'Content-Type': 'application/json'});
  private url: string = 'http://localhost:8080/api';
  constructor(private http: HttpClient) { }

  getSemestres(): Observable<Semestre[]>{
    return this.http.get<Semestre[]>(this.url+'/semestres');
  }
  getSemestre(id:number):Observable<Object>{
    return this.http.get(this.url+'/semestres/'+id);
  }
  addSemestre(semestre: Semestre): Observable<number>{
    return this.http.post<number>(this.url+'/semestres/add', semestre, {headers:this.httpHeaders});
  }
  
  deleteSemestre(id: number): Observable<number>{
    return this.http.delete<number>(this.url+"/semestres/delete/"+id,{headers:this.httpHeaders});
  }
  updateSemestre(semestre: Semestre, id:number):Observable<number>{
    return this.http.put<number>(this.url+"/semestres/update/"+id, semestre,{headers:this.httpHeaders});
  }

}
