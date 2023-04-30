import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ComponenteCafeComponent } from './componentecafe/componente-cafe/componente-cafe.component';

@NgModule({
  declarations: [ComponenteCafeComponent],
  imports: [CommonModule],
  exports: [ComponenteCafeComponent],
})
export class CafeModule {}
