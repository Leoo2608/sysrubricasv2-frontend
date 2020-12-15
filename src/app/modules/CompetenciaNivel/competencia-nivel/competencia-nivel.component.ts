import { Component, OnInit } from '@angular/core';
import { CompetenciaNivelService } from '../services/competencia-nivel.service';

@Component({
  selector: 'app-competencia-nivel',
  templateUrl: './competencia-nivel.component.html',
  styleUrls: ['./competencia-nivel.component.css']
})
export class CompetenciaNivelComponent implements OnInit {

  constructor(private compnivel: CompetenciaNivelService) { }

  ngOnInit(): void {
    this.traerCampus();
  }

  /*----Filtros */
  campus:any;
  facultades:any;
  escuelas:any;
  planes:any;
  lineas:any;
  traerCampus(){
    this.compnivel.getCampus().subscribe((data)=>{
        this.campus = data['CURSOR_U'];
        console.log(this.campus)
      })
  }
  traerFacultad(value:any){
    this.compnivel.getFacultad(value).subscribe(
      (data)=>{
        const filtered = data['CURSOR_U'].filter(function (el) {

          return el.FACULTADES != null;
        });
        this.facultades = filtered;
        console.log(this.facultades)
      })
      this.filtrado = "No";
  }
  traerEscuela(value){
    this.compnivel.getEscuela(value).subscribe(
      (data)=>{
        this.escuelas = data['CURSOR_U']
        console.log(this.escuelas)
      })
      this.filtrado = "No";
  }
  traerPlan(value){
    this.compnivel.getPlanesAcademicosforSelector(value).subscribe(
      (data)=>{
        this.planes = data['CURSOR_P']
        console.log(this.planes);
      })
    this.filtrado = "No";
  }
  traerLinea(value){
    this.compnivel.getLineasxPlan(value).subscribe(
      (data)=>{
        this.lineas = data['CURSOR_PL']
        console.log(this.lineas);
      }
    )
  }
  filtrado = "No";
  filt(){
    this.filtrado = "Si";
  }

}
