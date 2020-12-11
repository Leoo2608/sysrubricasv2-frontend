import { Injectable } from '@angular/core';
import { UnidadAcademica } from '../models/unidad-academica';
import { Observable, Subscription, of } from 'rxjs';
import { HttpClient, HttpHeaders, HttpRequest, HttpEvent} from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class UnidadAcademicaService {
  private httpHeaders = new HttpHeaders({ 'Content-Type': 'application/json'});
  private url: string = 'http://localhost:8080/api';
  constructor(private http: HttpClient) { }

  
}
