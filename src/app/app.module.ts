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

@NgModule({
  declarations: [
    AppComponent,
    PersonaComponent,
    RolComponent,
    ModuloComponent,
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
