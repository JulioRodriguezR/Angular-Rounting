import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PostsComponent } from './posts.component';


const routes: Routes = [
  {
    path: '',
    component: PostsComponent,
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PostsRoutingModule { }


/*
* Todo el modulo,con su definición de la ruta y definición del componente
* se carga de manera perezosa.
*/
