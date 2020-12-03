import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DefaultComponent } from './layouts/default/default.component';
import { HomeComponent } from './modules/home/home.component';
import { LineaAcademicaComponent } from './modules/LineaAcademica/linea-academica/linea-academica.component';
import { PostsComponent } from './modules/posts/posts.component';
import { SemestreComponent } from './modules/Semestre/semestre/semestre.component';

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
  },{
    path: 'moduloconfig/semestres',
    component: SemestreComponent
  }]
}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
