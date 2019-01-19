import { Component, OnInit } from '@angular/core';
import { Restaurant } from 'src/app/models/restaurant';
import { Router } from '@angular/router';
import { PlaceService } from 'src/app/services/place.service';

@Component({
  selector: 'app-flavor',
  templateUrl: './flavor.component.html',
  styleUrls: ['./flavor.component.css']
})
export class FlavorComponent implements OnInit {

  urlcombine:String[]=this.router.url.split('/');  
  category=this.urlcombine[1];
  value=this.urlcombine[2];

  restaurants: Restaurant[];
  flavorName:String;

  constructor(private router:Router,private placeService:PlaceService) { 

  }

  ngOnInit() {


    this.placeService.getRestaurantsByFlavor(this.value).subscribe(data=>{
      this.restaurants=data;
    });
    this.placeService.getFlavorById(this.value).subscribe(data=>this.flavorName=data.flavorName);
  }

}
