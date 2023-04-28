import { Component, OnInit } from '@angular/core';
import { AdventureService } from '../adventure.service';
import { City } from 'src/app/models/city';
import { Facility } from 'src/app/models/facility';

@Component({
  selector: 'app-home',
  templateUrl: './adventure-explorer.component.html',
  styleUrls: ['./adventure-explorer.component.scss']
})
export class AdventureExplorerComponent implements OnInit{
 cities:City[] ;
 facilities:Facility[];
constructor(private service:AdventureService){
  
}
  ngOnInit(): void {
   this.cities=this.service.getAllCities();
   this.facilities = this.service.getAllFacilities();
  }


}
