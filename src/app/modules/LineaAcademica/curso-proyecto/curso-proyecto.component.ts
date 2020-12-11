import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CursoProyecto } from '../models/curso-proyecto';
import { CursoProyectoService } from '../services/curso-proyecto.service';
import Swal from 'sweetalert2';
@Component({
  selector: 'app-curso-proyecto',
  templateUrl: './curso-proyecto.component.html',
  styleUrls: ['./curso-proyecto.component.css']
})
export class CursoProyectoComponent implements OnInit {
  cursoproyectos: any;
 
  cursoproyectoModel:CursoProyecto = new CursoProyecto();
 
  constructor(private cursosproyectoService:CursoProyectoService, private router:Router,private activatedRoute:ActivatedRoute) { }

  ngOnInit(): void {
    this.listarCursoProyecto(); 
  }


  listarCursoProyecto():void{
    this.cursosproyectoService.getCursoProyectos().subscribe(
      (data) =>{
       this.cursoproyectos = data['cursor_curso_proy'];
       console.log(this.cursoproyectos);
      }) 
  }
  /*Eliminar*/
  delCursoProyecto(num:number):void{    
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
              this.cursosproyectoService.deleteCursoProyecto(num).subscribe(
                response=>{
                  console.log(response)
                  this.listarCursoProyecto();
                }
              )
            }
          }
        )
    }
  /* Crear */
  public create():void{
    this.cursosproyectoService.addCursoProyecto(this.cursoproyectoModel).subscribe(
      response=>{
        Swal.fire('Nueva Curso Proyecto', `El curso proyecto ${this.cursoproyectoModel.id_curso_proy}  ha sido creado con exito`, "success")
        console.log(this.cursoproyectoModel);
        console.log(response);
      }
    )
    this.listarCursoProyecto(); // actualiza el listado
    this.limpiar();
  }
  
  /*Actualizar*/
  mensaje = "No"
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
          if(result.isConfirmed){
            this.listarCursoProyecto(); // actualiza el listado
            Swal.fire(
              'Actualizado!',
              'El registro ha sido actualizado.',
              'success'
              )
              this.cursosproyectoService.updateCursoProyecto(this.cursoproyectoModel, this.cursoproyectoModel.id_curso_proy).subscribe(
                response=>{
                  console.log(this.cursoproyectoModel);
                  console.log(response);
                }
              ) 
              this.cancelar();
              this.mensaje = 'Si';            
            }
          }   
    )
    
  }





  showButtonsUpdate = 'No';
  showButtonAdd = 'Si';
  cargarCursoProyecto(num:number):void{
        /* deshabilitar btn agregar, habilitar btn update y cancelar*/
        this.showButtonsUpdate = 'Si';
        this.showButtonAdd = 'No';
        this.cursosproyectoService.getCursoProyecto(num).subscribe(
          (data)=>{
          this.cursoproyectos=data['cursor_curso_proy'] 
          console.log(this.cursoproyectos[0].ID_CARGA + ' '+this.cursoproyectos[0].ID_PROYECTO +' '+this.cursoproyectos[0].ID_CURSO_PROY);


          this.cursoproyectoModel.id_carga=this.cursoproyectos[0].ID_CARGA;
          this.cursoproyectoModel.id_proyecto=this.cursoproyectos[0].ID_PROYECTO;
          this.cursoproyectoModel.id_curso_proy=this.cursoproyectos[0].ID_CURSO_PROY;
        })
  }
  cancelar(){
    this.showButtonsUpdate = 'No';
    this.showButtonAdd = 'Si';
    this.listarCursoProyecto();
    this.limpiar();
  }
  limpiar(){
  }


}
