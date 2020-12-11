import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { InstrumentoEvaluacion } from '../models/instrumento-evaluacion';
import { InstrumentoEvaluacionService } from '../services/instrumento-evaluacion.service';
import Swal from 'sweetalert2';
@Component({
  selector: 'app-instrumento-evaluacion',
  templateUrl: './instrumento-evaluacion.component.html',
  styleUrls: ['./instrumento-evaluacion.component.css']
})
export class InstrumentoEvaluacionComponent implements OnInit {
  instrumentoeval: any;
 
  instrumentoevalModel:InstrumentoEvaluacion = new InstrumentoEvaluacion();

  constructor(private instrumentoEvalService:InstrumentoEvaluacionService, private router:Router,private activatedRoute:ActivatedRoute) { }

  ngOnInit(): void {
    this.listarInstrumento(); 
  }


  listarInstrumento():void{
    this.instrumentoEvalService.getInstrumentos().subscribe(
      (data) =>{
       this.instrumentoeval = data['cursor_ins_evaluacion'];
       console.log(this.instrumentoeval);
      }) 
  }
  /*Eliminar*/
  delPersona(num:number):void{    
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
              this.instrumentoEvalService.deleteInstrumento(num).subscribe(
                response=>{
                  console.log(response)
                  this.listarInstrumento();
                }
              )
            }
          }
        )
    }
  /* Crear */
  public create():void{
    this.instrumentoEvalService.addInstumento(this.instrumentoevalModel).subscribe(
      response=>{
        Swal.fire('Nueva Persona', `La Persona ${this.instrumentoevalModel.id_instrumento}  ha sido creado con exito`, "success")
        console.log(this.instrumentoevalModel);
        console.log(response);
      }
    )
    this.listarInstrumento(); // actualiza el listado
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
            this.listarInstrumento(); // actualiza el listado
            Swal.fire(
              'Actualizado!',
              'El registro ha sido actualizado.',
              'success'
              )
              this.instrumentoEvalService.updateInstrumento(this.instrumentoevalModel, this.instrumentoevalModel.id_instrumento).subscribe(
                response=>{
                  console.log(this.instrumentoevalModel);
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
  cargarPersona(num:number):void{
        /* deshabilitar btn agregar, habilitar btn update y cancelar*/
        this.showButtonsUpdate = 'Si';
        this.showButtonAdd = 'No';
        this.instrumentoEvalService.getInstrumento(num).subscribe(
          (data)=>{
          this.instrumentoeval=data['cursor_ins_evaluacion'] 
          console.log(this.instrumentoeval[0].VALIDACION + ' '+this.instrumentoeval[0].OBSERVACION +' '+this.instrumentoeval[0].PORCENTAJE 
          +' '+this.instrumentoeval[0].NOMBRE + ' '+this.instrumentoeval[0].ID_METODOLOGIA+ ' '+this.instrumentoeval[0].ID_INSTRUMENTO);
          this.instrumentoevalModel.validacion=this.instrumentoeval[0].VALIDACION;
          this.instrumentoevalModel.observacion=this.instrumentoeval[0].OBSERVACION;
          this.instrumentoevalModel.porcentaje=this.instrumentoeval[0].PORCENTAJE;
          this.instrumentoevalModel.nombre=this.instrumentoeval[0].NOMBRE;
          this.instrumentoevalModel.id_metodologia=this.instrumentoeval[0].ID_METODOLOGIA;
          this.instrumentoevalModel.id_instrumento=this.instrumentoeval[0].ID_INSTRUMENTO;
        })
  }
  cancelar(){
    this.showButtonsUpdate = 'No';
    this.showButtonAdd = 'Si';
    this.listarInstrumento();
    this.limpiar();
  }
  limpiar(){
    this.instrumentoevalModel.validacion = "";
    this.instrumentoevalModel.observacion = "";
    this.instrumentoevalModel.nombre = "";

  }

}
