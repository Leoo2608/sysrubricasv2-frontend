import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Hitos } from '../models/hitos';
import { HitosService } from '../services/hitos.service';
import Swal from 'sweetalert2';
@Component({
  selector: 'app-hitos',
  templateUrl: './hitos.component.html',
  styleUrls: ['./hitos.component.css']
})
export class HitosComponent implements OnInit {
  hitos: any;
 
  hitoModel:Hitos = new Hitos();

  constructor(private hitosService:HitosService, private router:Router,private activatedRoute:ActivatedRoute) { }

  ngOnInit(): void {
    this.listarHito(); 
  }


  listarHito():void{
    this.hitosService.getHitos().subscribe(
      (data) =>{
       this.hitos = data['cursor_hitos'];
       console.log(this.hitos);
      }) 
  }
  /*Eliminar*/
  delHito(num:number):void{    
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
              this.hitosService.deleteHito(num).subscribe(
                response=>{
                  console.log(response)
                  this.listarHito();
                }
              )
            }
          }
        )
    }
  /* Crear */
  public create():void{
    this.hitosService.addHito(this.hitoModel).subscribe(
      response=>{
        Swal.fire('Nueva Hito', `EL hito  ${this.hitoModel.documento}  ha sido creado con exito`, "success")
        console.log(this.hitoModel);
        console.log(response);
      }
    )
    this.listarHito(); // actualiza el listado
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
            this.listarHito(); // actualiza el listado
            Swal.fire(
              'Actualizado!',
              'El registro ha sido actualizado.',
              'success'
              )
              this.hitosService.updateHito(this.hitoModel, this.hitoModel.id_hito).subscribe(
                response=>{
                  console.log(this.hitoModel);
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
  cargarHito(num:number):void{
        /* deshabilitar btn agregar, habilitar btn update y cancelar*/
        this.showButtonsUpdate = 'Si';
        this.showButtonAdd = 'No';
        this.hitosService.getHito(num).subscribe(
          (data)=>{
          this.hitos=data['cursor_hitos'] 
          console.log(this.hitos[0].ID_CURSO_PROY + ' '+this.hitos[0].DOCUMENTO +' '+this.hitos[0].FECHA 
          +' '+this.hitos[0].ID_HITO);
  

          this.hitoModel.id_curso_proy=this.hitos[0].ID_CURSO_PROY;
          this.hitoModel.documento=this.hitos[0].DOCUMENTO;
          this.hitoModel.fecha=this.hitos[0].FECHA;
          this.hitoModel.id_hito=this.hitos[0].ID_HITO;
        })
  }
  cancelar(){
    this.showButtonsUpdate = 'No';
    this.showButtonAdd = 'Si';
    this.listarHito();
    this.limpiar();
  }
  limpiar(){
    this.hitoModel.documento = "";
    this.hitoModel.fecha = "";
  }


}
