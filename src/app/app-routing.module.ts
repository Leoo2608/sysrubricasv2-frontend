import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DefaultComponent } from './layouts/default/default.component';
import { HomeComponent } from './modules/home/home.component';
import { ModuloComponent } from './modules/Modulo/modulo/modulo.component';
import { PersonaComponent } from './modules/Persona/persona/persona.component';
import { PostsComponent } from './modules/posts/posts.component';
import { RolComponent } from './modules/Rol/rol/rol.component';

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
    path: 'moduloconfig/persona',
    component: PersonaComponent
  },{
    path: 'moduloconfig/roles',
    component: RolComponent
  }, {
    path: 'moduloconfig/modulos',
    component: ModuloComponent
  }]
}];
  
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
