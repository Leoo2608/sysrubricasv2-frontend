import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DefaultModule } from './layouts/default/default.module';
import { LineaAcademicaComponent } from './modules/LineaAcademica/linea-academica/linea-academica.component';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { EvaluadorComponent } from './modules/LineaAcademica/evaluador/evaluador.component';
import { PersonaComponent } from './modules/LineaAcademica/persona/persona.component';
import { ExpertoexternoComponent } from './modules/LineaAcademica/expertoexterno/expertoexterno.component';
import { DocmetodologiaComponent } from './modules/LineaAcademica/docmetodologia/docmetodologia.component';
import { InstrumentoEvaluacionComponent } from './modules/LineaAcademica/instrumento-evaluacion/instrumento-evaluacion.component';
import { HitosComponent } from './modules/LineaAcademica/hitos/hitos.component';
import { ProyectoComponent } from './modules/LineaAcademica/proyecto/proyecto.component';
import { SemestreComponent } from './modules/LineaAcademica/semestre/semestre.component';
import { UnidadAcademicaComponent } from './modules/LineaAcademica/unidad-academica/unidad-academica.component';
import { CursoProyectoComponent } from './modules/LineaAcademica/curso-proyecto/curso-proyecto.component';

@NgModule({
  declarations: [
    AppComponent,
    LineaAcademicaComponent,
    EvaluadorComponent,
    PersonaComponent,
    ExpertoexternoComponent,
    DocmetodologiaComponent,
    InstrumentoEvaluacionComponent,
    HitosComponent,
    ProyectoComponent,
    SemestreComponent,
    UnidadAcademicaComponent,
    CursoProyectoComponent,
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
