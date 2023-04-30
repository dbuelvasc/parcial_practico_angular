import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ComponenteCafeComponent } from './cafe/componentecafe/componente-cafe/componente-cafe.component';

const routes: Routes = [ {
  path: '',
  component: ComponenteCafeComponent
} ];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
