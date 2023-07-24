import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { RecipeService } from 'src/app/services/recipe.service';
import { IRecipe } from 'src/app/types/recipe';

@Component({
  selector: 'app-recipe-form',
  templateUrl: './recipe-form.component.html',
  styleUrls: ['./recipe-form.component.css'],
})
export class RecipeFormComponent implements OnInit {
  editRecipeMode: boolean = false;
  currentRecipe!: IRecipe[];

  constructor(
    private router: Router,
    private recipeService: RecipeService,
    private activatedRoute: ActivatedRoute
  ) {}
  ngOnInit(): void {
    console.log(this.editRecipeMode);
    this.activatedRoute.params.subscribe((params) => {
      const idRecipe = params['idRecipe'];

      if (idRecipe) {
        console.log(idRecipe);

        setTimeout(() => {
          this.recipeService.getRecipe$(idRecipe).subscribe((recipe) => {
            this.editRecipeMode = true;
            this.currentRecipe = recipe;

            console.log(this.editRecipeMode, recipe);
          });
        });
      }
    });
  }

  createNewRecipe(newRecipeForm: NgForm): void {
    console.log(newRecipeForm.value);

    this.recipeService.createNewRecipe$(newRecipeForm.value).subscribe({
      next: (recipe) => {
        console.log(recipe);
      },
      error: (err) => {
        console.log(err);
      },
    });

    newRecipeForm.resetForm();
    this.router.navigate(['/recipes/my-recipes']);
  }
}
