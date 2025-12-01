import { RenderMode, ServerRoute } from '@angular/ssr';

export const serverRoutes: ServerRoute[] = [
  { path: 'home', renderMode: RenderMode.Prerender },
  { path: 'about', renderMode: RenderMode.Prerender },
  { path: 'locations', renderMode: RenderMode.Prerender },
  { path: 'menu', renderMode: RenderMode.Prerender },
  { path: 'catering', renderMode: RenderMode.Prerender },
  { path: 'contactUs', renderMode: RenderMode.Prerender },

  // catch-all fallback
  { path: '**', renderMode: RenderMode.Prerender }
];

