import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ListPersoPage } from './list-perso.page';

const routes: Routes = [
  {
    path: '',
    component: ListPersoPage
  },
  {
    path: 'new',
    loadChildren: () => import('../list-Perso/perso-new/perso-new.module').then( m => m.PersoNewPageModule)
  },
  {
    path: ':id',
    loadChildren: () => import('../list-Perso/perso/perso.module').then( m => m.PersoPageModule)
  },
  
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ListPersoPageRoutingModule {}
