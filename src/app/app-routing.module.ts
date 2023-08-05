import { RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';
import { HomeComponent } from './feature/pages/home/home.component';
import { CatalogComponent } from './feature/pages/catalog/catalog.component';
import { NewRecipeComponent } from './feature/pages/new-recipe/new-recipe.component';
import { MyRecipeComponent } from './feature/pages/my-recipe/my-recipe.component';
import { NotFoundPageComponent } from './feature/pages/not-found-page/not-found-page.component';
import { DetailsPageComponent } from './feature/pages/details-page/details-page.component';
import { EditComponent } from './feature/pages/edit/edit.component';
import { AuthGuard } from './core/guards/auth.guard';
import { UserGuard } from './core/guards/user.guard';

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
        canActivate: [AuthGuard, UserGuard],
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
    loadChildren: () =>
      import('./feature/search/search.module').then((m) => m.SearchModule),
    // title: 'Search',
    // component: SearchComponent,
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
