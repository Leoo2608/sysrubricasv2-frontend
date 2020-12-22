import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import Swal from 'sweetalert2';
import { Curso } from './curso';
import { CursoService } from './curso.service';

@Component({
  selector: 'app-curso',
  templateUrl: './curso.component.html',
  styleUrls: ['./curso.component.css']
})
export class CursoComponent implements OnInit {
  cursoModel:Curso = new Curso();
curso : any;
  constructor(private cursoService : CursoService , private router : Router) { }

  ngOnInit(): void {
    this.listar();

  };
  listar():void{
    this.cursoService.getCursos().subscribe(
      (data) => {
  this.curso= data['CURSOR_C'];
  

}
)
  };
  
  delCurso(num : number ) : void{
    this.cursoService.deleteCurso(num).subscribe(
      response=>{
        Swal.fire({
          title: 'Estas seguro?',
          text: "No podras reverti esto!",
          icon: 'warning',
          showCancelButton: true,
          confirmButtonColor: '#3085d6',
          cancelButtonColor: '#d33',
          cancelButtonText:'Me Equivoque',
          confirmButtonText: 'yes of course!'
        }).then((result) => {
          if (result.isConfirmed) {
            this.listar()
            Swal.fire('Eliminado!','El registro ha sido eliminado.','success')
          }
        })
      }
    )  
      
  };
public create():void{
  if( this.cursoModel.nombre.length > 1){
    
    this.cursoService.addCurso(this.cursoModel).subscribe(
      response =>{
      Swal.fire('Nuevo Curso ',`El curso ${this.cursoModel.nombre}  ha sido creado con exito`, "success")
    console.log(this.cursoModel.nombre);
    console.log(response);
    })
    this.listar();
    this.limpiar();
  }
  
};
mensaje = 'no';
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
        if(result.isConfirmed ){
          this.listar(); // actualiza el listado
          Swal.fire(
            'Actualizado!',
            'El registro ha sido actualizado.',
            'success'
            )
            this.cursoService.updateCurso(this.cursoModel, this.cursoModel.id_curso).subscribe(
              response=>{
                console.log(this.cursoModel);
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
cargarCurso(num:number):void{
  /* deshabilitar btn agregar, habilitar btn update y cancelar*/
  this.showButtonsUpdate = 'Si';
  this.showButtonAdd = 'No';
  this.cursoService.getCurso(num).subscribe(
    (data)=>{
    this.curso=data['CURSOR_C'] 
    console.log(this.curso[0].NOMBRE+' '+this.curso[0].ID_CURSO);
    this.cursoModel.nombre=this.curso[0].NOMBRE;
    this.cursoModel.id_curso=this.curso[0].ID_CURSO;
  })
}
cancelar(){
  this.showButtonsUpdate = 'No';
this.showButtonAdd = 'Si';
this.listar();
this.limpiar();
}
limpiar(){
this.cursoModel.nombre = '';
}
}