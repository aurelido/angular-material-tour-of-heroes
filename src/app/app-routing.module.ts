import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [{ 
  path: 'heroes', 
  loadChildren: () => import('./features/heroes/heroes.module').then(m => m.HeroesModule) 
}, 
{ 
  path: 'boxes', 
  loadChildren: () => import('./features/boxes/boxes.module').then(m => m.BoxesModule) 
}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
