import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ZoomDetailComponent } from './zoom/zoom-detail/zoom-detail.component';

const routes: Routes = [
  {
    path: '',
    component: ZoomDetailComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class BusinessRoutingModule { }