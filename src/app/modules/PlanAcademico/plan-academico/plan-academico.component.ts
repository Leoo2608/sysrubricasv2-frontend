import { Component, OnInit } from '@angular/core';
import Swal from 'sweetalert2';
import { PlanAcademico } from '../models/plan-academico';
import { PlanAcademicoService } from '../services/plan-academico.service';

@Component({
  selector: 'app-plan-academico',
  templateUrl: './plan-academico.component.html',
  styleUrls: ['./plan-academico.component.css']
})
export class PlanAcademicoComponent implements OnInit {

  constructor(private planService:PlanAcademicoService) { }

  ngOnInit(): void {
    this.traerCampus();
  }

  planes:any;
  planModel: PlanAcademico = new PlanAcademico();

  campus:any;
  facultades:any;
  escuelas:any;
  nom:string;

  traerCampus(){
    this.planService.getCampus().subscribe((data)=>{
        this.campus = data['CURSOR_U'];
        console.log(this.campus)
      })
  }
  traerFacultad(value:any){
    this.planService.getFacultad(value).subscribe(
      (data)=>{
        const filtered = data['CURSOR_U'].filter(function (el) {

          return el.FACULTADES != null;
        });
        this.facultades = filtered;
        console.log(this.facultades)
      })
      this.filtrado = "No";
      this.cancelar();
  }
  traerEscuela(value){
    this.planService.getEscuela(value).subscribe(
      (data)=>{
        this.escuelas = data['CURSOR_U']
        console.log(this.escuelas)
      })
      this.filtrado = "No";
      this.cancelar();
  }

  filtrado = "No";
  filt(){
    this.filtrado = "Si";
  }

  /*CRUD Plan Academico*/
  idunidad = null;
  listarPlanes(value){
    this.idunidad = value;
    this.planService.getPlanesAcademicosxUnidad(value).subscribe(
      (data)=>{
        this.planes = data['CURSOR_P'];
        console.log(this.planes);
      })
      this.cancelar();
  }
  
  delPlan(num:number):void{
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
          this.planService.deletePlanAcademico(num).subscribe(
            response=>{
              console.log(response)
              this.listarPlanes(this.idunidad);
            })
        }
      }
    )
  
  }
  create():void{
    this.planModel.idunidad = this.idunidad;
    this.planService.addPlanAcademico(this.planModel).subscribe(
      response=>{
        Swal.fire('Nuevo Plan', `El Plan ${this.planModel.nombre} ha sido creado con exito`, "success")
        console.log(this.planModel);
        console.log(response);
      })
    this.limpiar();
    this.listarPlanes(this.idunidad); // actualiza el listado
  }

  showButtonAdd = "Si";
  showButtonsUpdate = "No";
  cargarPlan(num:number):void{
    this.showButtonsUpdate = 'Si';
    this.showButtonAdd = 'No';
    this.planService.getPlanAcademico(num).subscribe(
      (data)=>{
      this.planes=data['CURSOR_P'] 
      this.planModel.idplan=this.planes[0].IDPLAN;
      this.planModel.nombre=this.planes[0].NOMBRE;
      this.planModel.ciclos=this.planes[0].CICLOS;
      this.planModel.cursos=this.planes[0].CURSOS;
      this.planModel.creditos=this.planes[0].CREDITOS;
      this.planModel.anio_inicio=this.planes[0].ANIO_INICIO;
      this.planModel.anio_termino=this.planes[0].ANIO_TERMINO;
      }
    )
  }
  public update():void{
    Swal.fire({
      title: '¿Desea actualizar el regsitro?',
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Confirmar',
      cancelButtonText: 'Cancelar'
    }).then(
        (result)=>{
          console.log(this.planModel.idplan)
          if(result.isConfirmed){
            Swal.fire(
              'Actualizado!',
              'El registro ha sido actualizado.',
              'success'
              )
              this.planModel.idunidad = this.idunidad;
              this.planService.updatePlanAcademico(this.planModel, this.planModel.idplan).subscribe(
                response=>{
                  console.log(this.planModel);
                  console.log(response);
                }) 
              this.cancelar();
              this.listarPlanes(this.idunidad);
            }
          }   
    )
  }
  cancelar(){
    this.showButtonsUpdate = 'No';
    this.showButtonAdd = 'Si';
    this.limpiar();
  }
  cancelarup(){
    this.showButtonsUpdate = 'No';
    this.showButtonAdd = 'Si';
    this.limpiar();
    this.listarPlanes(this.idunidad);
  }
  limpiar(){
    this.planModel.nombre = "";
    this.planModel.ciclos = null;
    this.planModel.cursos = null;
    this.planModel.creditos = null;
    this.planModel.anio_inicio = "";
    this.planModel.anio_termino = "";
  }
  
}
