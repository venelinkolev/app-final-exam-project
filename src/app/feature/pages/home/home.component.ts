import { Component, OnInit } from '@angular/core';
import { RecipeService } from 'src/app/services/recipe.service';
import { IRecipe } from 'src/app/types/recipe';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit {
  myRecipes!: IRecipe[];
  randomRecipe!: IRecipe[];
  isDetailsPage: boolean = false;

  constructor(private recipeService: RecipeService) {}

  ngOnInit(): void {
    this.recipeService.getAllRecipes$().subscribe((recipes) => {
      let randomNumber = Math.floor(Math.random() * recipes.length + 1);
      console.log(randomNumber);
      this.randomRecipe = recipes.splice(randomNumber - 1, 1);
      console.log(this.randomRecipe);
      this.myRecipes = recipes.slice(0, 3);
      console.log(recipes);
      this.isDetailsPage = false;
    });
  }
}
