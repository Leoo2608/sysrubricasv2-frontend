import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Semestre } from '../models/semestre';
import { SemestreService } from '../services/semestre.service';
import Swal from 'sweetalert2';
@Component({
  selector: 'app-semestre',
  templateUrl: './semestre.component.html',
  styleUrls: ['./semestre.component.css']
})
export class SemestreComponent implements OnInit {
  semestres: any;
 
  semestreModel:Semestre = new Semestre();
  
  constructor(private semestreService:SemestreService, private router:Router,private activatedRoute:ActivatedRoute) { }

  ngOnInit(): void {
    this.listarSemestre(); 
  }


  listarSemestre():void{
    this.semestreService.getSemestres().subscribe(
      (data) =>{
       this.semestres = data['cursor_semestre'];
       console.log(this.semestres);
      }) 
  }
  /*Eliminar*/
  delSemestre(num:number):void{    
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
              this.semestreService.deleteSemestre(num).subscribe(
                response=>{
                  console.log(response)
                  this.listarSemestre();
                }
              )
            }
          }
        )
    }
  /* Crear */
  public create():void{
    this.semestreService.addSemestre(this.semestreModel).subscribe(
      response=>{
        Swal.fire('Nuevo Semestre', `El semestre ${this.semestreModel.nombre}  ha sido creado con exito`, "success")
        console.log(this.semestreModel);
        console.log(response);
      }
    )
    this.listarSemestre(); // actualiza el listado
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
            this.listarSemestre(); // actualiza el listado
            Swal.fire(
              'Actualizado!',
              'El registro ha sido actualizado.',
              'success'
              )
              this.semestreService.updateSemestre(this.semestreModel, this.semestreModel.id_semestre).subscribe(
                response=>{
                  console.log(this.semestreModel);
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
  cargarSemestre(num:number):void{
        /* deshabilitar btn agregar, habilitar btn update y cancelar*/
        this.showButtonsUpdate = 'Si';
        this.showButtonAdd = 'No';
        this.semestreService.getSemestre(num).subscribe(
          (data)=>{
          this.semestres=data['cursor_semestre'] 
          console.log(this.semestres[0].NOMBRE + ' '+this.semestres[0].ID_SEMESTRE);
         
          this.semestreModel.nombre=this.semestres[0].NOMBRE;
          this.semestreModel.id_semestre=this.semestres[0].ID_SEMESTRE;
        })
  }
  cancelar(){
    this.showButtonsUpdate = 'No';
    this.showButtonAdd = 'Si';
    this.listarSemestre();
    this.limpiar();
  }
  limpiar(){
    this.semestreModel.nombre = "";
  
  }


}
