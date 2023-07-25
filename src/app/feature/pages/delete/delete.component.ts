import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Route, Router } from '@angular/router';
import { RecipeService } from 'src/app/services/recipe.service';

@Component({
  selector: 'app-delete',
  templateUrl: './delete.component.html',
  styleUrls: ['./delete.component.css'],
})
export class DeleteComponent implements OnInit {
  constructor(
    private recipeService: RecipeService,
    private activatedRoute: ActivatedRoute,
    private router: Router
  ) {}

  ngOnInit(): void {
    // setTimeout(() => {
    this.activatedRoute.params.subscribe((params) => {
      const id = params['idRecipe'];
      this.recipeService.deleteRecipe$(id).subscribe({
        next: () => {},
        error: (err) => {
          //console.log(err);
        },
      });
    });
    // });

    this.router.navigate(['/recipes/my-recipes']);
  }
}
