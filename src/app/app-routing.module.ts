import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)
  },
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: 'pag1',
    loadChildren: () => import('./pag1/pag1.module').then( m => m.Pag1PageModule)
  },
  {
    path: 'pag2',
    loadChildren: () => import('./pag2/pag2.module').then( m => m.Pag2PageModule)
  },
  {
    path: 'pag3',
    loadChildren: () => import('./pag3/pag3.module').then( m => m.Pag3PageModule)
  },
  {
    path: 'pag4',
    loadChildren: () => import('./pag4/pag4.module').then( m => m.Pag4PageModule)
  },
  {
    path: 'pag5',
    loadChildren: () => import('./pag5/pag5.module').then( m => m.Pag5PageModule)
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
