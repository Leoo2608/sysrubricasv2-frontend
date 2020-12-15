import { Component, OnInit } from '@angular/core';
import Swal from 'sweetalert2';
import { PlanLinea } from '../models/plan-linea';
import { PlanLineaService } from '../services/plan-linea.service';

@Component({
  selector: 'app-plan-linea',
  templateUrl: './plan-linea.component.html',
  styleUrls: ['./plan-linea.component.css']
})
export class PlanLineaComponent implements OnInit {

  constructor(private planlineaService: PlanLineaService) { }

  ngOnInit(): void {
    this.traerCampus();
    this.traerLineas();
  }
  /*----Filtros */
  campus:any;
  facultades:any;
  escuelas:any;
  planes:any
  traerCampus(){
    this.planlineaService.getCampus().subscribe((data)=>{
        this.campus = data['CURSOR_U'];
        console.log(this.campus)
      })
  }
  traerFacultad(value:any){
    this.planlineaService.getFacultad(value).subscribe(
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
    this.planlineaService.getEscuela(value).subscribe(
      (data)=>{
        this.escuelas = data['CURSOR_U']
        console.log(this.escuelas)
      })
      this.filtrado = "No";
  }
  traerPlan(value){
    this.planlineaService.getPlanesAcademicosforSelector(value).subscribe(
      (data)=>{
        this.planes = data['CURSOR_P']
        console.log(this.planes);
      })
    this.filtrado = "No";
  }
  filtrado = "No";
  filt(){
    this.filtrado = "Si";
  }
  /*Tabla de Listado Principal . Líneas por el Plan de selector */
  idplan=null;  /* Datos para el registro*/
  listadoLinea:any;
  listarLineasxPlan(value){
    console.log(value)
    this.idplan = value;
    console.log("Este es IdPlan conseguido: "+this.idplan)
    this.planlineaService.getLineasxPlan(value).subscribe(
      (data)=>{
        this.listadoLinea = data['CURSOR_PL']
        console.log(this.listadoLinea);
      }
    )
  }
  showButtonAdd = "Si";
  showButtonsUpdate = "No";
  
  /*Selector de lineas */
  lineas:any;
  traerLineas():void{
    this.planlineaService.getLineasAcademicas().subscribe(
      (data) =>{
       this.lineas = data['CURSOR_L'];
       console.log(this.lineas);
      }) 
  }

  /*         CRUD          */
  
  idlinea:null; /* Datos para el registro*/
  obtenerId(value:any){
    this.idlinea = value;
    console.log("Este es el Id_Linea conseguido: "+this.idlinea);
  }
  
  
  /* Create Function */
  planlineaModel: PlanLinea = new PlanLinea();
  create():void{
    this.planlineaModel.idplan = this.idplan;
    this.planlineaModel.idlinea = this.idlinea;
    this.planlineaService.addPlanLinea(this.planlineaModel).subscribe(
      response=>{
        Swal.fire('Nueva Linea Asignada', `La linea ha sido registrada al Plan Elegido`, "success")
        console.log(this.planlineaModel);
        console.log(response);
      })
    /*this.limpiar();*/
    this.listarLineasxPlan(this.idplan);
  }
  
  /* Delete Function */
  delPlanLinea(num:number){
    console.log(num)
    Swal.fire({
      title: '¿Desea eliminar este registro de forma permanente?',
      text: "No podras revertir esto!",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonText: 'Confirmar',
      cancelButtonText: 'Cancelar',
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33'     
    }).then(
      (result)=>{
        if(result.isConfirmed){ 
          Swal.fire(
          'Eliminado!',
          'El registro ha sido eliminado.',
          'success'
          )
          this.planlineaService.deletePlanLinea(num).subscribe(
            response=>{
              console.log(response)
              this.listarLineasxPlan(this.idplan);
            })
        }
      }
    )
  }

 
  /* Edit Function */
  cargarPlanLinea(id:number){ }
  update(){ }
  cancelar(){ }

}
