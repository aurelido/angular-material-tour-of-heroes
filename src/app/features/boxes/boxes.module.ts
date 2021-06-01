import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BoxesRoutingModule } from './boxes-routing.module';
import { BoxesComponent } from './boxes/boxes.component';
import { MaterialModule } from '../../core/material.module';


@NgModule({
  declarations: [
    BoxesComponent
  ],
  imports: [
    CommonModule,
    MaterialModule,
    BoxesRoutingModule
  ]
})
export class BoxesModule { }
