import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Persona } from '../models/persona';
import { PersonaService } from '../services/persona.service';
import Swal from 'sweetalert2';
@Component({
  selector: 'app-persona',
  templateUrl: './persona.component.html',
  styleUrls: ['./persona.component.css']
})
export class PersonaComponent implements OnInit {
  personas: any;
 
  personaModel:Persona = new Persona();
  constructor(private personaService:PersonaService, private router:Router,private activatedRoute:ActivatedRoute) { }

  ngOnInit(): void {
    this.listarPersona(); 
  }


  listarPersona():void{
    this.personaService.getPersonas().subscribe(
      (data) =>{
       this.personas = data['cursor_personas'];
       console.log(this.personas);
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
              this.personaService.deletePersona(num).subscribe(
                response=>{
                  console.log(response)
                  this.listarPersona();
                }
              )
            }
          }
        )
    }
  /* Crear */
  public create():void{
    this.personaService.addPersona(this.personaModel).subscribe(
      response=>{
        Swal.fire('Nueva Persona', `La Persona ${this.personaModel.nombres}  ha sido creado con exito`, "success")
        console.log(this.personaModel);
        console.log(response);
      }
    )
    this.listarPersona(); // actualiza el listado
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
            this.listarPersona(); // actualiza el listado
            Swal.fire(
              'Actualizado!',
              'El registro ha sido actualizado.',
              'success'
              )
              this.personaService.updatePersona(this.personaModel, this.personaModel.id_persona).subscribe(
                response=>{
                  console.log(this.personaModel);
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
        this.personaService.getPersona(num).subscribe(
          (data)=>{
          this.personas=data['cursor_personas'] 
          console.log(this.personas[0].TELEFONO + ' '+this.personas[0].DNI +' '+this.personas[0].APE_MAT 
          +' '+this.personas[0].APE_PAT + ' '+this.personas[0].NOMBRES+ ' '+this.personas[0].ID_PERSONA);
          this.personaModel.telefono=this.personas[0].TELEFONO;
          this.personaModel.dni=this.personas[0].DNI;
          this.personaModel.ape_mat=this.personas[0].APE_MAT;
          this.personaModel.ape_pat=this.personas[0].APE_PAT;
          this.personaModel.nombres=this.personas[0].NOMBRES;
          this.personaModel.id_persona=this.personas[0].ID_PERSONA;
        })
  }
  cancelar(){
    this.showButtonsUpdate = 'No';
    this.showButtonAdd = 'Si';
    this.listarPersona();
    this.limpiar();
  }
  limpiar(){
    this.personaModel.telefono = "";
    this.personaModel.dni = "";
    this.personaModel.ape_mat = "";
    this.personaModel.ape_pat = "";
    this.personaModel.nombres = "";
  }


}
