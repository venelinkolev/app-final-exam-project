import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { RecipeService } from 'src/app/services/recipe.service';
import { UserService } from 'src/app/services/user.service';
import { IRecipe } from 'src/app/types/recipe';
import { IUser } from 'src/app/types/user';

@Component({
  selector: 'app-my-recipe',
  templateUrl: './my-recipe.component.html',
  styleUrls: ['./my-recipe.component.css'],
})
export class MyRecipeComponent implements OnInit {
  myRecipes!: IRecipe[];
  currentUser$: Observable<IUser | undefined> = this.userService.user$;

  userId: string = '';

  constructor(
    private recipeService: RecipeService,
    private userService: UserService
  ) {}

  ngOnInit(): void {
    this.currentUser$.subscribe((user) => {
      console.log('UserId', user?._id);
      this.userId = user!._id;
    });
    this.recipeService.getRecipesByUserId$().subscribe((recipes) => {
      this.myRecipes = recipes.filter((recipe) => recipe.userId == this.userId);
      console.log(recipes);
    });
  }
}
