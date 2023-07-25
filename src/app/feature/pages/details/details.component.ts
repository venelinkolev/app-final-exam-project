import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';
import { RecipeService } from 'src/app/services/recipe.service';
import { IRecipe } from 'src/app/types/recipe';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css'],
})
export class DetailsComponent {
  @Input() detailsRecipe!: IRecipe;
  @Input() isDetailsPage!: boolean;

  constructor(private recipeService: RecipeService, private router: Router) {}

  deleteRecipe(id: string): void {
    console.log(id);
    this.recipeService.deleteRecipe$(id).subscribe({
      next: () => {},
      error: (err) => {
        //console.log(err);
      },
    });
    this.router.navigate(['/recipes/my-recipes']);
    //   this.recipeService.deleteRecipe$(id);
  }
}
