import { Injectable } from '@angular/core';
import {
  ActivatedRoute,
  ActivatedRouteSnapshot,
  CanActivate,
  Router,
  RouterStateSnapshot,
  UrlTree,
} from '@angular/router';
import { Observable } from 'rxjs';
import { first, map, mergeMap, take, tap } from 'rxjs/operators';
import { RecipeService } from 'src/app/services/recipe.service';
import { UserService } from 'src/app/services/user.service';

@Injectable({
  providedIn: 'root',
})
export class UserGuard implements CanActivate {
  constructor(
    private userService: UserService,
    private router: Router,
    private recipeService: RecipeService,
    private activatedRoute: ActivatedRoute
  ) {}

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): Observable<boolean | UrlTree> {
    let userId: string = '';
    let recipeId: string = '';

    this.userService.userId$.subscribe((id) => (userId = id));

    console.log(userId);

    this.recipeService.currentRecipeId$.subscribe(id => recipeId = id);

    console.log(recipeId);

    return this.recipeService.getRecipe$(recipeId).pipe(map((recipe) => {
      if (recipe[0].userId == userId) {
        return true;
      }
      return this.router.createUrlTree(['/auth/login']);
    }))
      
  }
}
