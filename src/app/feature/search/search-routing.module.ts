import { RouterModule, Routes } from '@angular/router';
import { SearchComponent } from './search.component';

const routes: Routes = [
  {
    path: '',
    title: 'Search',
    component: SearchComponent,
  },
];

export const SearchRoutingModule = RouterModule.forChild(routes);
