import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NewLinePipe } from './new-line.pipe';

@NgModule({
  declarations: [NewLinePipe],
  imports: [CommonModule],
  exports: [NewLinePipe],
})
export class UtilModule {}
