import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Evaluador } from '../models/evaluador';
import { EvaluadorService } from '../services/evaluador.service';
import Swal from 'sweetalert2';
@Component({
  selector: 'app-evaluador',
  templateUrl: './evaluador.component.html',
  styleUrls: ['./evaluador.component.css']
})
export class EvaluadorComponent implements OnInit {
  evaluadores: any;
 
  evaluadorModel:Evaluador = new Evaluador();
  constructor(private evaluadorService:EvaluadorService, private router:Router,private activatedRoute:ActivatedRoute) { }

  ngOnInit(): void {
    this.listarEvaluador(); 
  }
  /*Listar*/
  
  listarEvaluador():void{
    this.evaluadorService.getEvaluadores().subscribe(
      (data) =>{
       this.evaluadores = data['cursor_evaluadores'];
       console.log(this.evaluadores);
      }) 
  }
  /*Eliminar*/
  delEvaluador(num:number):void{    
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
              this.evaluadorService.deleteEvaluador(num).subscribe(
                response=>{
                  console.log(response)
                  this.listarEvaluador();
                }
              )
            }
          }
        )
    }
  /* Crear */
  public create():void{
    this.evaluadorService.addEvaluador(this.evaluadorModel).subscribe(
      response=>{
        Swal.fire('Nuevo Evaluador', `El evaluador ${this.evaluadorModel.idevaluador}  ha sido creado con exito`, "success")
        console.log(this.evaluadorModel);
        console.log(response);
      }
    )
    this.listarEvaluador(); // actualiza el listado
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
            this.listarEvaluador(); // actualiza el listado
            Swal.fire(
              'Actualizado!',
              'El registro ha sido actualizado.',
              'success'
              )
              this.evaluadorService.updateEvaluador(this.evaluadorModel, this.evaluadorModel.idevaluador).subscribe(
                response=>{
                  console.log(this.evaluadorModel);
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
  cargarEvaluador(num:number):void{
        /* deshabilitar btn agregar, habilitar btn update y cancelar*/
        this.showButtonsUpdate = 'Si';
        this.showButtonAdd = 'No';
        this.evaluadorService.getEvaluador(num).subscribe(
          (data)=>{
          this.evaluadores=data['cursor_evaluadores'] 
          console.log(this.evaluadores[0].TIPO+' '+this.evaluadores[0].ID_PROYECTO 
          +' '+this.evaluadores[0].ID_PERSONA +' '+this.evaluadores[0].IDEVALUADOR);
          this.evaluadorModel.tipo=this.evaluadores[0].TIPO;
          this.evaluadorModel.id_proyecto=this.evaluadores[0].ID_PROYECTO;
          this.evaluadorModel.id_persona=this.evaluadores[0].ID_PERSONA;
          this.evaluadorModel.idevaluador=this.evaluadores[0].IDEVALUADOR;
        })
  }
  cancelar(){
    this.showButtonsUpdate = 'No';
    this.showButtonAdd = 'Si';
    this.listarEvaluador();
    this.limpiar();
  }
  limpiar(){
    this.evaluadorModel.tipo = "";
  }

}
