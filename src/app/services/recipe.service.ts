import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, map } from 'rxjs';
import { IRecipe } from '../types/recipe';
import { environment } from 'src/environments/environment.development';

@Injectable({
  providedIn: 'root',
})
export class RecipeService {

  private _recipe = new BehaviorSubject<IRecipe[] | undefined>(undefined);

  recipe$: Observable<IRecipe[] | undefined> = this._recipe.asObservable();
  currentRecipeId$: Observable<string> = this.recipe$.pipe(map((recipe) => {
    if (!!recipe) {
      return recipe[0]._id;
    }
    return '';
  }))

  constructor(private http: HttpClient) {}

  recipeHendler(recipe: IRecipe[]) {
    this._recipe.next(recipe);
  }

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

  search$(search: string = ''): Observable<IRecipe[]> {
    //console.log(search);
    return this.http.get<IRecipe[]>(
      `${environment.url}/search?title=${search}`,
      {
        params: new HttpParams({
          fromObject: {},
        }),
      }
    );
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
