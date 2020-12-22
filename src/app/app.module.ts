import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DefaultModule } from './layouts/default/default.module';
import { LineaAcademicaComponent } from './modules/LineaAcademica/linea-academica/linea-academica.component';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { CursoPlanComponent } from './modules/curso-plan/curso-plan.component';
import { CursoComponent } from './modules/curso/curso.component';
import { ParticipanteComponent } from './modules/participante/participante.component';

@NgModule({
  declarations: [
    AppComponent,
    LineaAcademicaComponent,
    CursoPlanComponent,
    CursoComponent,
    ParticipanteComponent,
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
