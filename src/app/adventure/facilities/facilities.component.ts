import { Component, Input, OnInit } from '@angular/core';
import { Facility } from 'src/app/models/facility';
import { AdventureService } from '../adventure.service';

@Component({
  selector: 'app-facilities',
  templateUrl: './facilities.component.html',
  styleUrls: ['./facilities.component.scss']
})
export class FacilitiesComponent implements OnInit {
  @Input()facility :Facility;

  constructor(private service:AdventureService){
    
  }
  ngOnInit(): void {
}

}
