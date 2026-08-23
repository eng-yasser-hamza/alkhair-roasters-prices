import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    loadComponent: () =>
      import('./features/home/home/home')
        .then(m => m.Home)
  },

  {
    path: 'category/:slug',
    loadComponent: () =>
      import('./features/category/category/category')
        .then(m => m.Category)
  },

  {
    path: '**',
    redirectTo: ''
  }
];