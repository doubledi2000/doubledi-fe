import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BusinessRoutingModule } from './business-routing.module';
import { ShareModule } from 'src/app/share/share.module';


@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    BusinessRoutingModule,
    ShareModule
  ]
})
export class BusinessModule { }
