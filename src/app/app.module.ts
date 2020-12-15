import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DefaultModule } from './layouts/default/default.module';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { PersonaComponent } from './modules/Persona/persona/persona.component';
import { RolComponent } from './modules/Rol/rol/rol.component';
import { ModuloComponent } from './modules/Modulo/modulo/modulo.component';
import { SemestreComponent } from './modules/Semestre/semestre/semestre.component';
import { PlanAcademicoComponent } from './modules/PlanAcademico/plan-academico/plan-academico.component';
import { PlanLineaComponent } from './modules/PlanLinea/plan-linea/plan-linea.component';
import { CompetenciaNivelComponent } from './modules/CompetenciaNivel/competencia-nivel/competencia-nivel.component';
import { CompetenciaComponent } from './modules/Competencia/competencia/competencia.component';
import { CompetenciaCursoComponent } from './modules/CompetenciaCurso/competencia-curso/competencia-curso.component';
import { LineaAcademicaComponent } from './modules/LineaAcademica/linea-academica/linea-academica.component';


@NgModule({
  declarations: [
    AppComponent,
    PersonaComponent,
    RolComponent,
    ModuloComponent,
    LineaAcademicaComponent,
    SemestreComponent,
    PlanAcademicoComponent,
    PlanLineaComponent,
    CompetenciaNivelComponent,
    CompetenciaComponent,
    CompetenciaCursoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    DefaultModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
