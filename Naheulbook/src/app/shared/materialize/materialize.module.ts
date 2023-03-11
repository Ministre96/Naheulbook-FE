import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatSelectDirective } from './directives/mat-select.directive';



@NgModule({
  declarations: [
    MatSelectDirective
  ],
  imports: [
    CommonModule
  ],
  exports: [
    MatSelectDirective
  ]
})
export class MaterializeModule { }
