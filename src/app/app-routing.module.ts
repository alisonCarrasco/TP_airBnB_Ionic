import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', redirectTo: 'logements', pathMatch: 'full' },
  { path: 'auth', loadChildren: () => import('./auth/auth.module').then( m => m.AuthPageModule)},
  { path: 'logements', loadChildren: () => import('./logements/logements.module').then( m => m.LogementsPageModule)},
  { path: 'bookings', loadChildren: () => import('./bookings/bookings.module').then( m => m.BookingsPageModule)},
  // {path:'offres', loadChildren: () => import('./logements/offres/offres.module').then( m => m.OffresPageModule)}
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
