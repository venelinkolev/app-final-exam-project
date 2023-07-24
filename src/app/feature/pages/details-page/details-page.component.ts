import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { RecipeService } from 'src/app/services/recipe.service';
import { IRecipe } from 'src/app/types/recipe';

@Component({
  selector: 'app-details-page',
  templateUrl: './details-page.component.html',
  styleUrls: ['./details-page.component.css'],
})
export class DetailsPageComponent implements OnInit {
  currentDetailsRecipe!: IRecipe[];

  isDetailsPage: boolean = false;

  constructor(
    private recipeService: RecipeService,
    private activatedRoute: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.activatedRoute.params.subscribe((params) => {
      const id = params['idRecipe'];

      this.recipeService.getRecipe$(id).subscribe((recipe) => {
        this.currentDetailsRecipe = recipe;
        this.isDetailsPage = true;
        console.log(recipe);
      });
    });
  }
}
