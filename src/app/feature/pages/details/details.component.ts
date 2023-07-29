import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { RecipeService } from 'src/app/services/recipe.service';
import { UserService } from 'src/app/services/user.service';
import { IRecipe } from 'src/app/types/recipe';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css'],
})
export class DetailsComponent implements OnInit {
  @Input() detailsRecipe!: IRecipe;
  @Input() isDetailsPage!: boolean;

  userId$: Observable<string> = this.userService.userId$;

  constructor(
    private recipeService: RecipeService,
    private router: Router,
    private userService: UserService
  ) {}

  ngOnInit(): void {
    console.log('userId', this.detailsRecipe.userId);
  }

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
