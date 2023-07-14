import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { CoreModule } from './core/core.module';
import { HomeComponent } from './feature/pages/home/home.component';
import { AuthModule } from './auth/auth.module';
import { NewRecipeComponent } from './feature/pages/new-recipe/new-recipe.component';
import { MyRecipeComponent } from './feature/pages/my-recipe/my-recipe.component';
import { SearchComponent } from './feature/pages/search/search.component';
import { NotFoundPageComponent } from './feature/pages/not-found-page/not-found-page.component';
import { CatalogComponent } from './feature/pages/catalog/catalog.component';
import { RecipeComponent } from './feature/pages/recipe/recipe.component';
import { DetailsComponent } from './feature/pages/details/details.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    NewRecipeComponent,
    MyRecipeComponent,
    SearchComponent,
    NotFoundPageComponent,
    CatalogComponent,
    RecipeComponent,
    DetailsComponent,
  ],
  imports: [
    BrowserModule,
    AuthModule,
    CoreModule,
    HttpClientModule,
    AppRoutingModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
