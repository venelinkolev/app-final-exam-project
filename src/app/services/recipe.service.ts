import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { IRecipe } from '../types/recipe';
import { environment } from 'src/environments/environment.development';

@Injectable({
  providedIn: 'root',
})
export class RecipeService {
  constructor(private http: HttpClient) {}

  createNewRecipe$(body: {
    recipeName: string;
    imageUrl: string;
    ingredients: string;
    prepTime: number;
    cookTime: number;
    totalTime: number;
    servings: number;
  }): Observable<IRecipe> {
    return this.http.post<IRecipe>(
      `${environment.url}/recipes/new-recipe`,
      body,
      {
        withCredentials: true,
      }
    );
  }

  getAllRecipes$() {}

  getRecipeById$() {}
}
