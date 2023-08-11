import { Component, OnDestroy, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ErrorMessageService } from 'src/app/services/error-message.service';
import { RecipeService } from 'src/app/services/recipe.service';
import { MessageType } from 'src/app/types/message';
import { IRecipe } from 'src/app/types/recipe';

@Component({
  selector: 'app-recipe-form',
  templateUrl: './recipe-form.component.html',
  styleUrls: ['./recipe-form.component.css'],
})
export class RecipeFormComponent implements OnInit, OnDestroy {
  editRecipeMode: boolean = false;
  currentRecipe!: IRecipe[];
  idEditRecipe!: string;

  @ViewChild('editRecipeForm') editRecipeForm: NgForm | undefined;

  constructor(
    private router: Router,
    private recipeService: RecipeService,
    private activatedRoute: ActivatedRoute,
    private errorMesage: ErrorMessageService
  ) {}
  ngOnInit(): void {
    console.log(this.editRecipeMode);
    // this.activatedRoute.params.subscribe((params) => {
    //   const idRecipe = params['idRecipe'];
    const idRecipe = this.activatedRoute.snapshot.params['idRecipe'];

    this.idEditRecipe = idRecipe;

    if (idRecipe) {
      console.log(idRecipe);

      this.recipeService.getRecipe$(idRecipe).subscribe((recipe) => {
        this.editRecipeMode = true;
        this.currentRecipe = recipe;

        setTimeout(() => {
          this.editRecipeForm?.form.patchValue({
            recipeName: this.currentRecipe[0].recipeName,
            imageUrl: this.currentRecipe[0].imageUrl,
            ingredients: this.currentRecipe[0].ingredients,
            prepTime: this.currentRecipe[0].prepTime,
            cookTime: this.currentRecipe[0].cookTime,
            totalTime: this.currentRecipe[0].totalTime,
            servings: this.currentRecipe[0].servings,
          });
        });
        console.log(this.editRecipeMode, recipe);
      });
    }
    //});
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
      complete: () => {},
    });

    this.errorMesage.getErrorMessage({
      message: 'Success Create New Recipe!',
      type: MessageType.Success,
    });

    newRecipeForm.resetForm();
    //this.router.navigate(['/recipes/my-recipes']);
  }

  editRecipe(editRecipeForm: NgForm): void {
    console.log(this.idEditRecipe, editRecipeForm.value);
    this.recipeService
      .updateRecipe$(this.idEditRecipe, editRecipeForm.value)
      .subscribe({
        next: (recipe) => {
          console.log('Next', recipe);
        },
        error: (err) => {
          console.log(err);
        },
        complete: () => {
          console.log('Complete Edit');
        },
      });

    editRecipeForm.resetForm();
    this.router.navigate([`/recipes/${this.idEditRecipe}/details`]);
    this.errorMesage.getErrorMessage({
      message: 'Success Edit Recipe!',
      type: MessageType.Success,
    });
  }

  ngOnDestroy(): void {}
}
