import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Proyecto } from '../models/proyecto';
import { ProyectoService } from '../services/proyecto.service';
import Swal from 'sweetalert2';
@Component({
  selector: 'app-proyecto',
  templateUrl: './proyecto.component.html',
  styleUrls: ['./proyecto.component.css']
})
export class ProyectoComponent implements OnInit {
  proyectos: any;
 
  proyectoModel:Proyecto = new Proyecto();
  
  constructor(private proyectoService:ProyectoService, private router:Router,private activatedRoute:ActivatedRoute) { }

  ngOnInit(): void {
    this.listarProyecto(); 
  }


  listarProyecto():void{
    this.proyectoService.getProyectos().subscribe(
      (data) =>{
       this.proyectos = data['cursor_proyecto'];
       console.log(this.proyectos);
      }) 
  }
  /*Eliminar*/
  delProyecto(num:number):void{    
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
              this.proyectoService.deleteProyecto(num).subscribe(
                response=>{
                  console.log(response)
                  this.listarProyecto();
                }
              )
            }
          }
        )
    }
  /* Crear */
  public create():void{
    this.proyectoService.addProyecto(this.proyectoModel).subscribe(
      response=>{
        Swal.fire('Nuevo Proyecto', `El Proyecto ${this.proyectoModel.id_proyecto}  ha sido creado con exito`, "success")
        console.log(this.proyectoModel);
        console.log(response);
      }
    )
    this.listarProyecto(); // actualiza el listado
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
            this.listarProyecto(); // actualiza el listado
            Swal.fire(
              'Actualizado!',
              'El registro ha sido actualizado.',
              'success'
              )
              this.proyectoService.updateProyecto(this.proyectoModel, this.proyectoModel.id_proyecto).subscribe(
                response=>{
                  console.log(this.proyectoModel);
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
  cargarProyecto(num:number):void{
        /* deshabilitar btn agregar, habilitar btn update y cancelar*/
        this.showButtonsUpdate = 'Si';
        this.showButtonAdd = 'No';
        this.proyectoService.getProyecto(num).subscribe(
          (data)=>{
          this.proyectos=data['cursor_proyecto'] 
          console.log(this.proyectos[0].ID_PERSONA + ' '+this.proyectos[0].GRUPOS +' '+this.proyectos[0].CICLO 
          +' '+this.proyectos[0].ID_SEMESTRE + ' '+this.proyectos[0].ID_PROYECTO);
      
          this.proyectoModel.id_persona=this.proyectos[0].ID_PERSONA;
          this.proyectoModel.grupos=this.proyectos[0].GRUPOS;
          this.proyectoModel.ciclo=this.proyectos[0].CICLO;
          this.proyectoModel.id_semestre=this.proyectos[0].ID_SEMESTRE;
          this.proyectoModel.id_proyecto=this.proyectos[0].ID_PROYECTO;
        })
  }
  cancelar(){
    this.showButtonsUpdate = 'No';
    this.showButtonAdd = 'Si';
    this.listarProyecto();
    this.limpiar();
  }
  limpiar(){
    this.proyectoModel.ciclo= "";

  }



}
