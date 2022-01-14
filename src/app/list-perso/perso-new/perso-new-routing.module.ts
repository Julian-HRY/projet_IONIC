import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PersoNewPage } from './perso-new.page';

const routes: Routes = [
  {
    path: '',
    component: PersoNewPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PersoNewPageRoutingModule {}
