import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PersoNewPageRoutingModule } from './perso-new-routing.module';

import { PersoNewPage } from './perso-new.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PersoNewPageRoutingModule
  ],
  declarations: [PersoNewPage]
})
export class PersoNewPageModule {}
