import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NewRecipeComponent } from './new-recipe/new-recipe.component';
import { MyRecipeComponent } from './my-recipe/my-recipe.component';
import { RecipeComponent } from './recipe/recipe.component';
import { HomeComponent } from './home/home.component';
import { DetailsComponent } from './details/details.component';
import { NotFoundPageComponent } from './not-found-page/not-found-page.component';
import { CatalogComponent } from './catalog/catalog.component';
import { DetailsPageComponent } from './details-page/details-page.component';
import { RecipeFormComponent } from './recipe-form/recipe-form.component';
import { EditComponent } from './edit/edit.component';

@NgModule({
  declarations: [
    NewRecipeComponent,
    MyRecipeComponent,
    RecipeComponent,
    HomeComponent,
    DetailsComponent,
    NotFoundPageComponent,
    CatalogComponent,
    DetailsPageComponent,
    RecipeFormComponent,
    EditComponent,
  ],
  imports: [CommonModule, RouterModule, FormsModule, ReactiveFormsModule],
  exports: [],
})
export class PageModule {}
