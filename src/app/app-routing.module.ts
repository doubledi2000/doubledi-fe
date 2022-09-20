import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { ROUTER_UTILS } from './shared/utils/router.utils';
import { SidebarComponent } from './core/layout/sidebar/sidebar.component';

const  routes: Routes = [
  {
    path: ROUTER_UTILS.base.home,
    component: SidebarComponent
  }
]

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forRoot(routes)
  ]
})
export class AppRoutingModule { }
