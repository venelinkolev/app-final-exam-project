import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { RecipeService } from 'src/app/services/recipe.service';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-new-recipe',
  templateUrl: './new-recipe.component.html',
  styleUrls: ['./new-recipe.component.css'],
})
export class NewRecipeComponent implements OnInit {
  // constructor(private router: Router, private recipeService: RecipeService) {}

  ngOnInit(): void {}

  // createNewRecipe(newRecipeForm: NgForm): void {
  //   console.log(newRecipeForm.value);

  //   this.recipeService.createNewRecipe$(newRecipeForm.value).subscribe({
  //     next: (recipe) => {
  //       console.log(recipe);
  //     },
  //     error: (err) => {
  //       console.log(err);
  //     },
  //   });

  //   newRecipeForm.resetForm();
  //   this.router.navigate(['/recipes/my-recipes']);
  // }
}
