import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpValidatorDirective } from './http-validator.directive';
import { MinValueDirective } from './min-value.directive';

@NgModule({
  declarations: [HttpValidatorDirective, MinValueDirective],
  imports: [CommonModule],
  exports: [HttpValidatorDirective, MinValueDirective],
})
export class SharedModule {}
