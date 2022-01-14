import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ListPersoPageRoutingModule } from './list-perso-routing.module';

import { ListPersoPage } from './list-perso.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ListPersoPageRoutingModule
  ],
  declarations: [ListPersoPage]
})
export class ListPersoPageModule {}
