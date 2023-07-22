import { Component, OnInit } from '@angular/core';
import { RecipeService } from 'src/app/services/recipe.service';
import { IRecipe } from 'src/app/types/recipe';

@Component({
  selector: 'app-my-recipe',
  templateUrl: './my-recipe.component.html',
  styleUrls: ['./my-recipe.component.css'],
})
export class MyRecipeComponent implements OnInit {
  myRecipes!: IRecipe[];

  constructor(private recipeService: RecipeService) {}

  ngOnInit(): void {
    this.recipeService.getAllRecipes$().subscribe((recipes) => {
      this.myRecipes = recipes;
      console.log(recipes);
    });
  }
}
