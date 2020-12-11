import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ExpertoExterno } from '../models/experto-externo';
import { ExpertoExternoService } from '../services/experto-externo.service';
import Swal from 'sweetalert2';
@Component({
  selector: 'app-expertoexterno',
  templateUrl: './expertoexterno.component.html',
  styleUrls: ['./expertoexterno.component.css']
})
export class ExpertoexternoComponent implements OnInit {
  expertoexternos: any;
 
  expertosModel:ExpertoExterno = new ExpertoExterno();
  constructor(private expertoExternoservice:ExpertoExternoService, private router:Router,private activatedRoute:ActivatedRoute) { }

  ngOnInit(): void {
    this.listarExpertos(); 
  }


  listarExpertos():void{
    this.expertoExternoservice.getExpertos().subscribe(
      (data) =>{
       this.expertoexternos = data['cursor_expertos'];
       console.log(this.expertoexternos);
      }) 
  }
  /*Eliminar*/
  delExperto(num:number):void{    
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
              this.expertoExternoservice.deleteExperto(num).subscribe(
                response=>{
                  console.log(response)
                  this.listarExpertos();
                }
              )
            }
          }
        )
    }
  /* Crear */
  public create():void{
    this.expertoExternoservice.addExperto(this.expertosModel).subscribe(
      response=>{
        Swal.fire('Nueva Experto Externo', `El experto  ${this.expertosModel.id_persona}  ha sido creado con exito`, "success")
        console.log(this.expertosModel);
        console.log(response);
      }
    )
    this.listarExpertos(); // actualiza el listado
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
            this.listarExpertos(); // actualiza el listado
            Swal.fire(
              'Actualizado!',
              'El registro ha sido actualizado.',
              'success'
              )
              this.expertoExternoservice.updateExperto(this.expertosModel, this.expertosModel.id_experto).subscribe(
                response=>{
                  console.log(this.expertosModel);
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
  cargarExperto(num:number):void{
        /* deshabilitar btn agregar, habilitar btn update y cancelar*/
        this.showButtonsUpdate = 'Si';
        this.showButtonAdd = 'No';
        this.expertoExternoservice.getExperto(num).subscribe(
          (data)=>{
          this.expertoexternos=data['cursor_expertos'] 
          console.log(this.expertoexternos[0].ID_PERSONA + ' '+this.expertoexternos[0].ID_EXPERTO);
          this.expertosModel.id_persona=this.expertoexternos[0].ID_PERSONA;
          this.expertosModel.id_experto=this.expertoexternos[0].ID_EXPERTO;
  
        })
  }
  cancelar(){
    this.showButtonsUpdate = 'No';
    this.showButtonAdd = 'Si';
    this.listarExpertos();
    this.limpiar();
  }
  limpiar(){

   
  }


}
