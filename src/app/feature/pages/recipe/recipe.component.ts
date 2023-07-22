import { Component, Input } from '@angular/core';
import { IRecipe } from 'src/app/types/recipe';

@Component({
  selector: 'app-recipe',
  templateUrl: './recipe.component.html',
  styleUrls: ['./recipe.component.css'],
})
export class RecipeComponent {
  @Input()
  recipe!: IRecipe;
}
