import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { LineaAcademica } from '../models/linea-academica';
import { LineaAcademicaService } from '../services/linea-academica.service';
import Swal from 'sweetalert2';
@Component({
  selector: 'app-linea-academica',
  templateUrl: './linea-academica.component.html',
  styleUrls: ['./linea-academica.component.css']
})
export class LineaAcademicaComponent implements OnInit {
  lineas: any;
 
  lineaModel:LineaAcademica = new LineaAcademica();

  constructor(private lineaService:LineaAcademicaService, private router:Router,private activatedRoute:ActivatedRoute) { }

  ngOnInit(): void {
    this.listarLinea(); 
  }
  /*Listar*/
  
  listarLinea():void{
    this.lineaService.getLineasAcademicas().subscribe(
      (data) =>{
       this.lineas = data['CURSOR_L'];
       console.log(this.lineas);
      }) 
  }
  /*Eliminar*/
  delLinea(num:number):void{    
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
              this.lineaService.deleteLineaAcademica(num).subscribe(
                response=>{
                  console.log(response)
                  this.listarLinea();
                }
              )
            }
          }
        )
    }
  /* Crear */
  public create():void{
    this.lineaService.addLineaAcademica(this.lineaModel).subscribe(
      response=>{
        Swal.fire('Nueva Línea', `La Línea ${this.lineaModel.nombre}  ha sido creado con exito`, "success")
        console.log(this.lineaModel);
        console.log(response);
      }
    )
    this.listarLinea(); // actualiza el listado
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
            this.listarLinea(); // actualiza el listado
            Swal.fire(
              'Actualizado!',
              'El registro ha sido actualizado.',
              'success'
              )
              this.lineaService.updateLineaAcademica(this.lineaModel, this.lineaModel.id_linea).subscribe(
                response=>{
                  console.log(this.lineaModel);
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
  cargarRol(num:number):void{
        /* deshabilitar btn agregar, habilitar btn update y cancelar*/
        this.showButtonsUpdate = 'Si';
        this.showButtonAdd = 'No';
        this.lineaService.getLineaAcademica(num).subscribe(
          (data)=>{
          this.lineas=data['CURSOR_L'] 
          console.log(this.lineas[0].NOMBRE+' '+this.lineas[0].ID_LINEA);
          this.lineaModel.nombre=this.lineas[0].NOMBRE;
          this.lineaModel.id_linea=this.lineas[0].ID_LINEA;
        })
  }
  cancelar(){
    this.showButtonsUpdate = 'No';
    this.showButtonAdd = 'Si';
    this.listarLinea();
    this.limpiar();
  }
  limpiar(){
    this.lineaModel.nombre = "";
  }
}
