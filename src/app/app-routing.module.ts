import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DefaultComponent } from './layouts/default/default.component';
import { CursoPlanComponent } from './modules/curso-plan/curso-plan.component';
import { CursoComponent } from './modules/curso/curso.component';
import { HomeComponent } from './modules/home/home.component';
import { LineaAcademicaComponent } from './modules/LineaAcademica/linea-academica/linea-academica.component';
import { ParticipanteComponent } from './modules/participante/participante.component';
import { PostsComponent } from './modules/posts/posts.component';

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
  },
  {
    path: 'moduloconfig/cursos',
    component: CursoComponent
  },
  {
    path: 'moduloconfig/participante',
    component: ParticipanteComponent
  },
  {
    path: 'moduloconfig/cursoplan',
    component: CursoPlanComponent
  }]
}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
