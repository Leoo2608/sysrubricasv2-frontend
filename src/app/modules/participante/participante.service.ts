import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Participante } from './participante';

@Injectable({
  providedIn: 'root'
})
export class ParticipanteService {
private httpHeaders = new HttpHeaders({ 'Content-Type': 'application/json'});
private urlparticipante : string = 'http://localhost:9090/api';
private urlparticipantexnuidad : string = 'http://localhost:9090/api/personaxunidad';
private urlproyecto : string = 'http://localhost:9090/api/proyecto';
private urlpxp  : string = 'http://localhost:9090/api/PxP';
  constructor(private http: HttpClient) { }
  getSemestre(): Observable<Object[]>{
    return this.http.get<Object[]>('http://localhost:9090/semestres/all');
  }
  getParticipantes() : Observable<Participante[]>{
    return this.http.get<Participante[]>(this.urlparticipante + '/participante');

  }
  getParticipante( id : number ) : Observable<Object>{
    return this.http.get(`${this.urlparticipante}/${id}`);
  }
  getProyecto( id : number ) : Observable<Object>{
    return this.http.get(`${this.urlproyecto}/${id}`);
  } 
  addParticipante(participante: Participante): Observable<number>{
    return this.http.post<number>(this.urlparticipante+'/add', participante, {headers:this.httpHeaders});
  }
  
  getPxP( id : number ) : Observable<Object>{
    return this.http.get(`${this.urlpxp}/${id}`);
  } 
  getPersonaxunidad( id : number ) : Observable<Object>{
    return this.http.get(`${this.urlparticipantexnuidad}/${id}`);
  }  
}
