import { RenderMode, ServerRoute } from '@angular/ssr';

export const serverRoutes: ServerRoute[] = [
  {
    path: 'category/:slug',
    renderMode: RenderMode.Client
  },
  {
    path: '**',
    renderMode: RenderMode.Server
  }
];