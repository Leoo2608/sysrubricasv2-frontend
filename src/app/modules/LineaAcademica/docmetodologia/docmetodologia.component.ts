import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { DocMetodologia } from '../models/doc-metodologia';
import { DocMetodologiaService } from '../services/doc-metodologia.service';
import Swal from 'sweetalert2';
@Component({
  selector: 'app-docmetodologia',
  templateUrl: './docmetodologia.component.html',
  styleUrls: ['./docmetodologia.component.css']
})
export class DocmetodologiaComponent implements OnInit {
  docmetodologias: any;
 
  docmetodologiaModel:DocMetodologia = new DocMetodologia();

  constructor(private docmetodologiaService:DocMetodologiaService, private router:Router,private activatedRoute:ActivatedRoute) { }

  ngOnInit(): void {
    this.listarDocMetodologias(); 
  }


  listarDocMetodologias():void{
    this.docmetodologiaService.getMetodologias().subscribe(
      (data) =>{
       this.docmetodologias = data['cursor_metodologia'];
       console.log(this.docmetodologias);
      }) 
  }
  /*Eliminar*/
  delDocMetodologia(num:number):void{    
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
              this.docmetodologiaService.deleteMetodologia(num).subscribe(
                response=>{
                  console.log(response)
                  this.listarDocMetodologias();
                }
              )
            }
          }
        )
    }
  /* Crear */
  public create():void{
    this.docmetodologiaService.addMetodologia(this.docmetodologiaModel).subscribe(
      response=>{
        Swal.fire('Nuevo Doc Metodologia', `EL documento Metodologia ${this.docmetodologiaModel.id_metodologia}  ha sido creado con exito`, "success")
        console.log(this.docmetodologiaModel);
        console.log(response);
      }
    )
    this.listarDocMetodologias(); // actualiza el listado
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
            this.listarDocMetodologias(); // actualiza el listado
            Swal.fire(
              'Actualizado!',
              'El registro ha sido actualizado.',
              'success'
              )
              this.docmetodologiaService.updateMetodologia(this.docmetodologiaModel, this.docmetodologiaModel.id_metodologia).subscribe(
                response=>{
                  console.log(this.docmetodologiaModel);
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
  cargarDocMetodologia(num:number):void{
        /* deshabilitar btn agregar, habilitar btn update y cancelar*/
        this.showButtonsUpdate = 'Si';
        this.showButtonAdd = 'No';
        this.docmetodologiaService.getMetodologia(num).subscribe(
          (data)=>{
          this.docmetodologias=data['cursor_metodologia'] 
          console.log(this.docmetodologias[0].DOCUMENTO + ' '+this.docmetodologias[0].ID_SEMESTRE +' '+this.docmetodologias[0].ID_UNIDAD 
          +' '+this.docmetodologias[0].ID_METODOLOGIA);
          this.docmetodologiaModel.documento=this.docmetodologias[0].DOCUMENTO;
          this.docmetodologiaModel.id_semestre=this.docmetodologias[0].ID_SEMESTRE;
          this.docmetodologiaModel.id_unidad=this.docmetodologias[0].ID_UNIDAD;
          this.docmetodologiaModel.id_metodologia=this.docmetodologias[0].ID_METODOLOGIA;
      
        })
  }
  cancelar(){
    this.showButtonsUpdate = 'No';
    this.showButtonAdd = 'Si';
    this.listarDocMetodologias();
    this.limpiar();
  }
  limpiar(){
    this.docmetodologiaModel.documento = "";
    
  }


}
