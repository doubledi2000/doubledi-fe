import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AuthRoutingModule } from './auth-routing.module';
import { LoginComponent } from './login/login.component';
import { Page404Component } from './page404/page404.component';
import { ShareModule } from 'src/app/share/share.module';


@NgModule({
  declarations: [
    LoginComponent,
    Page404Component
  ],
  imports: [
    CommonModule,
    AuthRoutingModule,
    ShareModule
  ],
})
export class AuthModule { }
