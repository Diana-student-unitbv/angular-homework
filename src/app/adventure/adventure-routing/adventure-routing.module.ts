import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdventureExplorerComponent } from '../adventure-explorer/adventure-explorer.component';
import { DetailsComponent } from '../details/details.component';



const routes: Routes = [{ component: AdventureExplorerComponent, path: '' },{
  path:"details/:id", component:DetailsComponent
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AdventureRoutingModule { }
