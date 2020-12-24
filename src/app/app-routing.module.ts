import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DefaultComponent } from './layouts/default/default.component';
import { CompetenciaComponent } from './modules/Competencia/competencia/competencia.component';
import { CompetenciaCursoComponent } from './modules/CompetenciaCurso/competencia-curso/competencia-curso.component';
import { CompetenciaNivelComponent } from './modules/CompetenciaNivel/competencia-nivel/competencia-nivel.component';
import { HomeComponent } from './modules/home/home.component';
import { ModuloComponent } from './modules/Modulo/modulo/modulo.component';
import { PersonaComponent } from './modules/Persona/persona/persona.component';
import { RolComponent } from './modules/Rol/rol/rol.component';
import { LineaAcademicaComponent } from './modules/LineaAcademica/linea-academica/linea-academica.component';
import { ModuloConfigComponent } from './modules/Modulos/modulo-config/modulo-config.component';
import { ModuloEjeComponent } from './modules/Modulos/modulo-eje/modulo-eje.component';
import { ModuloInfComponent } from './modules/Modulos/modulo-inf/modulo-inf.component';
import { ModuloPlanComponent } from './modules/Modulos/modulo-plan/modulo-plan.component';
import { ModuloSegComponent } from './modules/Modulos/modulo-seg/modulo-seg.component';
import { PlanAcademicoComponent } from './modules/PlanAcademico/plan-academico/plan-academico.component';
import { PlanLineaComponent } from './modules/PlanLinea/plan-linea/plan-linea.component';
import { SemestreComponent } from './modules/Semestre/semestre/semestre.component';

/*
Agregar en children cada path por cada componente (CRUD)
*/
const routes: Routes = [{
  path: '',
  component: DefaultComponent,
  children: [{
    path: '',
    component: HomeComponent
  }, {
    path: 'moduloconfig',
    component: ModuloConfigComponent
  }, {
    path: 'moduloseg/persona',
    component: PersonaComponent
  },{
    path: 'moduloseg/roles',
    component: RolComponent
  }, {
    path: 'moduloseg/modulos',
    component: ModuloComponent  
  }, {
    path: 'moduloplan',
    component: ModuloPlanComponent
  }, {
    path: 'moduloeje',
    component: ModuloEjeComponent
  }, {
    path: 'moduloinf',
    component: ModuloInfComponent
  }, {
    path: 'moduloseg',
    component: ModuloSegComponent
  }, {
    path: 'moduloconfig/lineas',
    component: LineaAcademicaComponent
  }, {
    path: 'moduloconfig/semestres',
    component: SemestreComponent

  }, {
    path: 'moduloconfig/planes',
    component: PlanAcademicoComponent
  }, {
    path: 'moduloconfig/planlineas',
    component: PlanLineaComponent
  }, {
    path: 'moduloconfig/competenciasniveles',
    component: CompetenciaNivelComponent
  }, {
    path: 'moduloconfig/competencia',
    component: CompetenciaComponent
  },{
    path: 'moduloconfig/competenciascursos',
    component: CompetenciaCursoComponent
  }]
}];
  
@NgModule({
  imports: [RouterModule.forRoot(routes, { relativeLinkResolution: 'legacy' })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
