import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { NewOffrePageRoutingModule } from './new-offre-routing.module';

import { NewOffrePage } from './new-offre.page';

@NgModule({
  imports: [
    CommonModule,
    ReactiveFormsModule,
    IonicModule,
    NewOffrePageRoutingModule
  ],
  declarations: [NewOffrePage]
})
export class NewOffrePageModule {}
