import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import Swal from 'sweetalert2';
import { Curso } from '../curso/curso';
import { CursoService } from '../curso/curso.service';
import { CursoPlan } from './curso-plan';
import { CursoPlanService } from './curso-plan.service';
import { PlanAcademico } from './plan-academico';

@Component({
  selector: 'app-curso-plan',
  templateUrl: './curso-plan.component.html',
  styleUrls: ['./curso-plan.component.css']
})
export class CursoPlanComponent implements OnInit {
  planes: any;
  curso : any;
  idcurso : any;
  listadoLinea : any;
  idplan:any;
  idcursoplan : any;
  cursoplan:any;
value : any;
  cursoPlanModel : CursoPlan = new CursoPlan();
  cursoModel : Curso = new Curso();
  constructor(private cursoPlanService : CursoPlanService , private cursoService : CursoService , private router : Router  ) { }
  
  ngOnInit(): void {
    this.traerCampus();
    this.getcursos();
  }

    traerCurso(value){
      this.idplan = value;
      console.log('idplan es : '+ this.idplan);
        this.cursoPlanService.getcpp(value).subscribe(
          (data) => {
          this.curso= data['CURSOR_CPP'];
          console.log(this.curso)
          this.elgranshow = 'Si';
      })
    }
    idc: any;
    editidcurso(value : any){
        this.idc = value;
    }
    traerPlan(){
      this.cursoPlanService.getPlanesAcademicos().subscribe(
        (data) => {
          this.planes = data['CURSOR_P'];
        }
      )
    };
    obteneridcurso(value:any){
      this.idcurso = value;
      console.log('idcurso es : '+ this.idcurso);
    }
    
     /*Filtros*/
  campus:any;
  facultades:any;
  escuelas:any;
  nom:string;
  
  traerCampus(){
    this.cursoPlanService.getCampus().subscribe((data)=>{
        this.campus = data['CURSOR_U'];
        console.log(this.campus)
      }
    )
  }
  
  traerFacultad(value:any){
    console.log('Activado, Resultado:')
    console.log(value);
    this.cursoPlanService.getFacultad(value).subscribe(
      (data)=>{
        const filtered = data['CURSOR_U'].filter(function (el) {

          return el.FACULTADES != null;
        });
        this.facultades = filtered;
        console.log(this.facultades)
      }
    )
  }

  traerEscuela(value){
    console.log('Activado, Resultado:')
    console.log(value);
    this.cursoPlanService.getEscuela(value).subscribe(
      (data)=>{
        this.escuelas = data['CURSOR_U']
        console.log(this.escuelas)
      }
    )
  }

  listarPlanes(value){
  
    this.cursoPlanService.getPlanesAcademicosxUnidad(value).subscribe(
      (data)=>{
        this.planes = data['CURSOR_P'];
        console.log(this.planes);
      }
    )
  }
  filtrado = "No";
  filt(){
    this.filtrado = "Si";
  }
  showButtonAdd = "Si";
  showButtonsUpdate = "No";
  agregarCurso(){

  }

  receptor:any;
  getcursos(){
    this.cursoService.getCursos().subscribe((data)=>{
      this.receptor = data['CURSOR_C'];
    })
  }
  
  create(){
    console.log('alo ' + this.cursoPlanModel.ciclo);
    this.cursoPlanModel.id_plan = this.idplan;
    this.cursoPlanModel.id_curso = this.idcurso;
    

    console.log(this.cursoPlanModel);
    
    this.cursoPlanService.addCursoPlan(this.cursoPlanModel).subscribe(
      response=>{
        Swal.fire('Nuevo Curso', `El Curso ha sido registrado al Plan con éxito`, "success")
        console.log(response);
        
      })
    this.limpiar();
    this.traerCurso(this.idplan); // actualiza el listado
    
  }
  delPlan(num:number):void{
    this.cursoPlanService.deleteCursoPlan(num).subscribe(
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
            Swal.fire('Eliminado!','El registro ha sido eliminado.','success')
            console.log('esto es '+this.traerCurso(this.idplan));
          }
        })
      }
    )  
  } 
 
  conseguircp(num:number){
      this.showButtonsUpdate = 'Si';
      this.showButtonAdd = 'No';
      
      this.cursoPlanService.getCursoPlan(num).subscribe(
        (data) =>{
          console.log(data['CURSOR_CP'])
          this.cursoplan = data['CURSOR_CP'];       
          this.cursoPlanModel.id_curso_plan =  this.cursoplan[0].ID_CURSO_PLAN;
          this.cursoPlanModel.ciclo = this.cursoplan[0].CICLO;
          this.cursoPlanModel.horas = this.cursoplan[0].HORAS;
          console.log(this.cursoPlanModel)
        }
      )
  }
  cancelarup(){
    this.showButtonAdd = 'Si';
    this.showButtonsUpdate = 'No';

  }
  cancelar(){
    this.showButtonsUpdate = 'No';
    this.showButtonAdd = 'Si';
    this.traerCurso(this.idcursoplan);
    this.limpiar();
  }
  limpiar(){
    this.cursoPlanModel.horas = null;
    this.cursoPlanModel.ciclo = null;
  }
  public update():void{
    this.cursoPlanModel.id_curso = this.idc;
    this.cursoPlanModel.id_plan =  this.idplan;
    console.log(this.cursoPlanModel)
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
              this.cursoPlanService.updateCursoPlan(this.cursoPlanModel ,this.cursoPlanModel.id_curso_plan).subscribe(
                response=>{
                  console.log(this.cursoPlanModel);
                  console.log(response);
                }
              ) 
              this.traerCurso(this.idplan);
              this.cancelarup();
            }
          }   
          
    )
  }
  showButtonsUpdate = 'No';
  showButtonAdd = 'Si';
  elgranshow = 'No';
}