import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { FilmesComponent } from './filmes/filmes.component';
import { FilmesAddComponent } from './filmes-add/filmes-add.component';
import { FilmesDetailsComponent } from './filmes-details/filmes-details.component';
import { FilmesEditComponent } from './filmes-edit/filmes-edit.component';

const routes: Routes = [
  {
    path: 'filmes',
    component: FilmesComponent,
    data: { title: 'Lista de Filmes'}
  },
  {
   path:'filmes-add',
   component: FilmesAddComponent,
   data: { title: 'Adicao de Filmes'}
  },
  {
    path: 'filmes-details/:id',
    component: FilmesDetailsComponent,
    data: { title: 'Detalhes de Filmes'}
  },
  {
    path: 'filmes-edit/:id',
    component: FilmesEditComponent,
    data: { title: 'Alteração de Filmes'}
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
