import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { IconsProviderModule } from '../icons-provider.module';
import { NzLayoutModule } from 'ng-zorro-antd/layout';
import { NzMenuModule } from 'ng-zorro-antd/menu';
import { NzButtonModule } from 'ng-zorro-antd/button';
import {NzFormModule} from 'ng-zorro-antd/form'
import { ReactiveFormsModule } from '@angular/forms';



@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule,
    IconsProviderModule,
    ReactiveFormsModule,
    NzLayoutModule,
    NzMenuModule,
    NzButtonModule
  ],
  exports: [
    CommonModule,
    RouterModule,
    IconsProviderModule,
    NzLayoutModule,
    NzMenuModule,
    NzButtonModule,
    NzFormModule
  ]
})
export class ShareModule { }
