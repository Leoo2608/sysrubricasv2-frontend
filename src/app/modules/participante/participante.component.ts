import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import Swal from 'sweetalert2';
import { CursoPlanService } from '../curso-plan/curso-plan.service';
import { CursoService } from '../curso/curso.service';
import { Participante } from './participante';
import { ParticipanteService } from './participante.service';

@Component({
  selector: 'app-participante',
  templateUrl: './participante.component.html',
  styleUrls: ['./participante.component.css']
})
export class ParticipanteComponent implements OnInit {

participanteModel : Participante = new Participante();
  constructor(private participanteService : ParticipanteService ,private cursoPlanService : CursoPlanService , private cursoService : CursoService, private router : Router) { }

  ngOnInit(): void {
    this.trearSemestre();
    this.traerCampus();

  }
  
  semestre : any;
  planes: any;
  listadoLinea : any;
  idplan:any;
value : any;
personas :any;
  trearSemestre(){
    this.participanteService.getSemestre().subscribe(
      (data) =>{
        this.semestre = data['cursor_semestre'];
        console.log(this.semestre);
      }
    )
  }
  
 
  traerPlan(){
    this.cursoPlanService.getPlanesAcademicos().subscribe(
      (data) => {
        this.planes = data['CURSOR_P'];
      }
    )
  };
  
   /*Filtros*/
campus:any;
facultades:any;
escuelas:any;
nom:string;
persona : any;
traerCampus(){
  this.cursoPlanService.getCampus().subscribe((data)=>{
      this.campus = data['CURSOR_U'];
      console.log(this.campus)
    }
  )
}

traerFacultad(value:any){
  console.log('Activado, Resultado:')
  console.log(value);
  this.cursoPlanService.getFacultad(value).subscribe(
    (data)=>{
      const filtered = data['CURSOR_U'].filter(function (el) {

        return el.FACULTADES != null;
      });
      this.facultades = filtered;
      console.log(this.facultades)
    }
  )
}

traerEscuela(value){
  console.log('Activado, Resultado:')
  console.log(value);
  this.cursoPlanService.getEscuela(value).subscribe(
    (data)=>{
      this.escuelas = data['CURSOR_U']
      console.log(this.escuelas)
    }
  )
}
traerpersonas(value){
  console.log('Activado, Resultado:')
  console.log(value);
  this.participanteService.getPersonaxunidad(value).subscribe(
    (data)=>{
      this.personas = data['CURSOR_P']
      console.log(this.persona)
    }
  )
}
listar = 'no';
traerNombrexP(value){
  console.log('Activado, Resultado:')
  console.log(value);
  this.participanteService.getPxP(value).subscribe(
    (data)=>{
      this.persona = data['CURSOR_P']
      console.log(this.persona)
    }
  )
  this.listar = 'si';
}
proyecto : any;
listarProyecto(value){
  this.participanteService.getProyecto(value).subscribe(
    (data)=>{
      this.proyecto = data['CURSOR_P'];
      console.log(this.proyecto);
    }
  )
  
}







filtrado = "No";
  filt(){
    this.filtrado = "Si";
  }
  showButtonAdd = "Si";
  showButtonsUpdate = "No";
  agregarCurso(){

  }

  receptor:any;

  cancelarup(){}
  cancelar(){
    this.showButtonsUpdate = 'No';
    this.showButtonAdd = 'Si';
    this.limpiar();
  }
  limpiar(){
    
  }
  
  showButtonsUpdate = 'No';
  showButtonAdd = 'Si';
  //idpersona
  idpersona : any;
  obteneridpersona(value :any){
    this.idpersona = value;
  }
  
}

