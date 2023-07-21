import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NewRecipeComponent } from './new-recipe/new-recipe.component';
import { MyRecipeComponent } from './my-recipe/my-recipe.component';

@NgModule({
  declarations: [NewRecipeComponent, MyRecipeComponent],
  imports: [CommonModule, RouterModule, FormsModule, ReactiveFormsModule],
  exports: [],
})
export class PageModule {}
