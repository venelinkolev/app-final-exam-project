import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, map } from 'rxjs';
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

  getAllRecipes$(): Observable<IRecipe[]> {
    return this.http.get<IRecipe[]>(`${environment.url}/recipes`, {
      withCredentials: true,
    });
  }

  getRecipesByUserId$(): Observable<IRecipe[]> {
    return this.http.get<IRecipe[]>(`${environment.url}/recipes`, {
      withCredentials: true,
    });
    // .pipe(map((recipe) => recipe.filter((r) => r.userId == user)));
  }

  getRecipe$(id: string): Observable<IRecipe[]> {
    return this.http.get<IRecipe[]>(`${environment.url}/recipes/${id}/details`);
  }

  updateRecipe$(id: string, body: IRecipe): Observable<IRecipe[]> {
    return this.http.post<IRecipe[]>(
      `${environment.url}/recipes/${id}/edit`,
      body,
      { withCredentials: true }
    );
  }

  deleteRecipe$(id: string) {
    console.log('delete', id);
    return this.http.delete(`${environment.url}/recipes/${id}/delete`, {
      withCredentials: true,
    });
  }
}
