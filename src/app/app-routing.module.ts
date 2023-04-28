import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';

const routes: Routes = [
  {
    path: 'adventure',
    loadChildren: () =>
      import('./adventure/adventure.module').then((m) => m.AdventureModule),
  }, 
  {
    path: '', component:HomeComponent
  
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
