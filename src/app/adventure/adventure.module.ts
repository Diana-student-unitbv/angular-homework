import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AdventureExplorerComponent } from './adventure-explorer/adventure-explorer.component';
import { AdventureRoutingModule } from './adventure-routing/adventure-routing.module';
import { FacilitiesComponent } from './facilities/facilities.component';
import { DetailsComponent } from './details/details.component';



@NgModule({
  declarations: [
    AdventureExplorerComponent,
    FacilitiesComponent,
    DetailsComponent
  ],
  imports: [
    CommonModule,
    AdventureRoutingModule
  ]
})
export class AdventureModule { }
