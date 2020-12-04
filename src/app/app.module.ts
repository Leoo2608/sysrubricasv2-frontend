import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DefaultModule } from './layouts/default/default.module';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { LineaAcademicaComponent } from './modules/LineaAcademica/linea-academica/linea-academica.component';
import { PlanAcademicoComponent } from './modules/PlanAcademico/plan-academico/plan-academico.component';
import { PlanLineaComponent } from './modules/PlanLinea/plan-linea/plan-linea.component';

@NgModule({
  declarations: [
    AppComponent,
    LineaAcademicaComponent,
    PlanAcademicoComponent,
    PlanLineaComponent
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
