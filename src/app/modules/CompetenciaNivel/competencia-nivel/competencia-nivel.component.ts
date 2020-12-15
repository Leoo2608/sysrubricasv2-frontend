import { Component, OnInit } from '@angular/core';
import Swal from 'sweetalert2';
import { CompetenciaNivel } from '../models/competencia-nivel';
import { CompetenciaNivelService } from '../services/competencia-nivel.service';

@Component({
  selector: 'app-competencia-nivel',
  templateUrl: './competencia-nivel.component.html',
  styleUrls: ['./competencia-nivel.component.css']
})
export class CompetenciaNivelComponent implements OnInit {

  showButtonAdd = 'Si';
  showButtonsUpdate = 'No';
  constructor(private compnivel: CompetenciaNivelService) { }

  ngOnInit(): void {
    this.traerCampus();
    this.traerNiveles();
  }

  /*---- Selectores ---- */
  campus:any;
  facultades:any;
  escuelas:any;
  planes:any;
  lineas:any;
  comps:any;

  traerCampus(){
    this.compnivel.getCampus().subscribe((data)=>{
        this.campus = data['CURSOR_U'];
        console.log(this.campus)
      })
  }
  traerFacultad(value:any){
    this.compnivel.getFacultad(value).subscribe(
      (data)=>{
        const filtered = data['CURSOR_U'].filter(function (el) {

          return el.FACULTADES != null;
        });
        this.facultades = filtered;
        console.log(this.facultades)
      })
      this.filtrado = "No";
  }
  traerEscuela(value){
    this.compnivel.getEscuela(value).subscribe(
      (data)=>{
        this.escuelas = data['CURSOR_U']
        console.log(this.escuelas)
      })
      this.filtrado = "No";
  }
  traerPlan(value){
    this.compnivel.getPlanesAcademicosforSelector(value).subscribe(
      (data)=>{
        this.planes = data['CURSOR_P']
        console.log(this.planes);
      })
    this.filtrado = "No";
  }
  traerLinea(value){
    this.compnivel.getLineasxPlan(value).subscribe(
      (data)=>{
        this.lineas = data['CURSOR_PL']
        console.log(this.lineas);
      }
    )
    this.filtrado = "No";
  }
  traerCompetencia(value){
    console.log(value)
    this.compnivel.getCompetencias(value).subscribe(
      (data)=>{
        this.comps = data['CURSOR_C'];
        console.log(this.comps);
      }
    )
    this.filtrado = "No";
  }

  filtrado = "No";
  filt(){
    this.filtrado = "Si";
  } 

  /*Selector de Niveles */
  niveles:any;
  traerNiveles(){
    this.compnivel.getNiveles().subscribe(
      (data)=>{
        this.niveles = data['cursor_nivel'];
        console.log(this.niveles)
      })
  }

  /* CRUD */
  idcomp = null;
  listadoCompNivel: any;
  listarNivelesCompetencias(value){
    this.idcomp = value;
    this.compnivel.getCompetenciaNivelesDin(this.idcomp).subscribe(
      (data)=>{
        this.listadoCompNivel = data['CURSOR_CN']
        console.log(this.listadoCompNivel);
      }
    )
  }

  mostrarSaber(num:any){
    Swal.fire({
      title: "Saber:",
      text: this.listadoCompNivel[num].SABER
    }  
    );
  }

  mostrarHacer(num:any){
    Swal.fire({
      title: "Hacer:",
      text: this.listadoCompNivel[num].HACER
    }   
    );
  }

  idnivel = null;
  obteneridnivel(value){
    this.idnivel = value;
  }
  
  /* Create Function */
  compnivelModel: CompetenciaNivel = new CompetenciaNivel();

  create(){
    this.compnivelModel.idcomp = this.idcomp;
    this.compnivelModel.idnivel = this.idnivel;
    this.compnivel.addCompetenciaNivel(this.compnivelModel).subscribe(
      response=>{
        Swal.fire('Nuevo Nivel - Competencia', `El nivel para la competencia ha sido creado con exito`, "success")
        console.log(this.compnivelModel);
        console.log(response);
      })
    this.limpiar(); // limpiar los inputs
    this.listarNivelesCompetencias(this.idcomp); // actualiza el listado
  }

 

  /* Delete Function */
  delete(num:number){
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
          this.compnivel.deleteCompetenciaNivel(num).subscribe(
            response=>{
              console.log(response)
              this.listarNivelesCompetencias(this.idcomp);
              this.traerNiveles();
            })
        }
      }
    )
  }
  /* Update Function */
  receptor:any;
  cargar(num:number){
    this.showButtonsUpdate = 'Si';
    this.showButtonAdd = 'No';
    this.compnivel.getCompetenciaNivel(num).subscribe(
      (data)=>{
      this.receptor=data['CURSOR_CN'] 
      this.compnivelModel.idcomp_n=this.receptor[0].IDCOMP_N;
      this.compnivelModel.idcomp=this.receptor[0].IDCOMP;
      this.compnivelModel.idnivel=this.receptor[0].IDNIVEL;
      this.compnivelModel.saber=this.receptor[0].SABER;
      this.compnivelModel.hacer=this.receptor[0].HACER;
      }
    )
  }
  cancelar(){
    this.limpiar();
    this.showButtonsUpdate = 'No';
    this.showButtonAdd = 'Si';
  }
  update(){
    console.log(this.compnivelModel);
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
            Swal.fire(
              'Actualizado!',
              'El registro ha sido actualizado.',
              'success'
              )
              this.compnivel.updateCompetenciaNivel(this.compnivelModel, this.compnivelModel.idcomp_n).subscribe(
                response=>{
                  console.log(this.compnivelModel);
                  console.log(response);
                  this.cancelar();
                  this.listarNivelesCompetencias(this.idcomp);
                }) 
           
            }
          }   
    )
  }
  

  /* Otras Funciones */

  limpiar(){
    this.compnivelModel.saber = "";
    this.compnivelModel.hacer = "";
    this.compnivelModel.idcomp = null;
    this.compnivelModel.idnivel = null;
  }
   
  /* Cambios Importantes */
}
