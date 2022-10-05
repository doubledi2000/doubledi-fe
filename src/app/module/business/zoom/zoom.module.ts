import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ZoomRoutingModule } from './zoom-routing.module';
import { ZoomDetailComponent } from './zoom-detail/zoom-detail.component';
import { BrowserModule } from '@angular/platform-browser';
import { ShareModule } from 'src/app/share/share.module';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';


@NgModule({
  declarations: [
    ZoomDetailComponent
  ],
  imports: [
    CommonModule,
    ZoomRoutingModule,
    BrowserModule,
    ShareModule,
    BrowserModule,
    FormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
  ]
})
export class ZoomModule { }
