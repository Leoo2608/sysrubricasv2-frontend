import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DefaultComponent } from './layouts/default/default.component';
import { HomeComponent } from './modules/home/home.component';
import { LineaAcademicaComponent } from './modules/LineaAcademica/linea-academica/linea-academica.component';
import { PostsComponent } from './modules/posts/posts.component';
import { EvaluadorComponent } from './modules/LineaAcademica/evaluador/evaluador.component';
import { PersonaComponent } from './modules/LineaAcademica/persona/persona.component';
import { ExpertoexternoComponent} from './modules/LineaAcademica/expertoexterno/expertoexterno.component';

import { DocmetodologiaComponent } from './modules/LineaAcademica/docmetodologia/docmetodologia.component';
import { InstrumentoEvaluacionComponent } from './modules/LineaAcademica/instrumento-evaluacion/instrumento-evaluacion.component';
import { HitosComponent } from './modules/LineaAcademica/hitos/hitos.component';

import { ProyectoComponent } from './modules/LineaAcademica/proyecto/proyecto.component';
import { SemestreComponent } from './modules/LineaAcademica/semestre/semestre.component';
import { UnidadAcademicaComponent } from './modules/LineaAcademica/unidad-academica/unidad-academica.component';
import { CursoProyectoComponent } from './modules/LineaAcademica/curso-proyecto/curso-proyecto.component';



/*
Agregar en children cada path por cada componente (CRUD)
*/
const routes: Routes = [{
  path: '',
  component:DefaultComponent,
  children: [{
    path: '',
    component: HomeComponent
  }, {
    path: 'posts',
    component: PostsComponent
  }, {
    path: 'moduloconfig/lineas',
    component: LineaAcademicaComponent
  } , {
    path: 'evaluador',
    component: EvaluadorComponent
  } , {
    path: 'persona',
    component: PersonaComponent
  },{
    path: 'expertoexterno' ,
    component: ExpertoexternoComponent
  } ,{
    path: 'docmetodologia' ,
    component: DocmetodologiaComponent
  } , {
    path: 'instrumento-evaluacion' , 
    component:InstrumentoEvaluacionComponent
  } , {
    path: 'hitos',
    component:HitosComponent
  } , {
    path: 'proyecto' , 
    component:ProyectoComponent
  } ,{
    path: 'semestre',
    component:SemestreComponent
  } ,{
    path:'unidad-academica' , 
    component:UnidadAcademicaComponent
  } ,{
    path:'curso-proyecto' ,
    component:CursoProyectoComponent
  }]
}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
