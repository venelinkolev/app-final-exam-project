import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import {
  debounceTime,
  mergeMap,
  startWith,
  switchMap,
  map,
  filter,
} from 'rxjs';
import { RecipeService } from 'src/app/services/recipe.service';
import { IRecipe } from 'src/app/types/recipe';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css'],
})
export class SearchComponent implements OnInit {
  recipes: IRecipe[] = [];

  searchFormControl = new FormControl();

  constructor(private recipeService: RecipeService) {}

  ngOnInit(): void {
    this.searchFormControl.valueChanges
      .pipe(
        //startWith(''),
        debounceTime(800),
        filter((searchValue) => searchValue.length > 2),
        switchMap((searchValue) => this.recipeService.search$(searchValue))
      )
      .subscribe((recipe) => {
        console.log(recipe);
        this.recipes = recipe;
      });
  }
}
