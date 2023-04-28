import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { FacilityDetail } from 'src/app/models/detail';
import { AdventureService } from '../adventure.service';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.scss']
})
export class DetailsComponent implements OnInit {
listOfFacilities:FacilityDetail[];
facilityId:string;
city :string;
constructor(private activateRoute:ActivatedRoute, private adventureServcie:AdventureService){
this.activateRoute.params.subscribe((params)=>{
  this.city=params['city'];
  this.facilityId= params['id'];
})
}

ngOnInit(): void {
 this.listOfFacilities=this.adventureServcie.getListOfDetails(this.city, this.facilityId);
}

}
