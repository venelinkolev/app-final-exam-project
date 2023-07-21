import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { CoreModule } from './core/core.module';
import { HomeComponent } from './feature/pages/home/home.component';
import { AuthModule } from './auth/auth.module';
import { MyRecipeComponent } from './feature/pages/my-recipe/my-recipe.component';
import { SearchComponent } from './feature/pages/search/search.component';
import { NotFoundPageComponent } from './feature/pages/not-found-page/not-found-page.component';
import { CatalogComponent } from './feature/pages/catalog/catalog.component';
import { RecipeComponent } from './feature/pages/recipe/recipe.component';
import { DetailsComponent } from './feature/pages/details/details.component';
import { PageModule } from './feature/pages/page.module';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
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
    PageModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
