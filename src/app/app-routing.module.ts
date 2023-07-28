import { RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';
import { HomeComponent } from './feature/pages/home/home.component';
import { LoginComponent } from './auth/login/login.component';
import { RegisterComponent } from './auth/register/register.component';
import { CatalogComponent } from './feature/pages/catalog/catalog.component';
import { NewRecipeComponent } from './feature/pages/new-recipe/new-recipe.component';
import { MyRecipeComponent } from './feature/pages/my-recipe/my-recipe.component';
import { SearchComponent } from './feature/pages/search/search.component';
import { NotFoundPageComponent } from './feature/pages/not-found-page/not-found-page.component';
import { DetailsPageComponent } from './feature/pages/details-page/details-page.component';
import { EditComponent } from './feature/pages/edit/edit.component';
import { AuthGuard } from './core/guards/auth.guard';

const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    redirectTo: '/home',
  },
  {
    path: 'home',
    title: 'Home',
    component: HomeComponent,
  },
  {
    path: 'catalog',
    title: 'Catalog',
    component: CatalogComponent,
  },
  {
    path: 'recipes',
    children: [
      {
        path: 'new-recipe',
        title: 'New Recipe',
        canActivate: [AuthGuard],
        component: NewRecipeComponent,
      },
      {
        path: 'my-recipes',
        title: 'My Recipes',
        canActivate: [AuthGuard],
        component: MyRecipeComponent,
      },
      {
        path: ':idRecipe/edit',
        title: 'Edit Recipe',
        canActivate: [AuthGuard],
        component: EditComponent,
      },
      {
        path: ':idRecipe/details',
        title: 'Details',
        component: DetailsPageComponent,
      },
    ],
  },
  {
    path: 'search',
    title: 'Search',
    component: SearchComponent,
  },
  {
    path: 'auth',
    loadChildren: () => import('./auth/auth.module').then((m) => m.AuthModule),
  },
  {
    path: '**',
    component: NotFoundPageComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
