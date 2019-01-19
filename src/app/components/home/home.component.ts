import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { Restaurant } from 'src/app/models/restaurant';
import { Flavor } from 'src/app/models/flavor';
import { PlaceService } from 'src/app/services/place.service';
import { ThrowStmt } from '@angular/compiler';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  @ViewChild('restaurantContent') restaurantContent: ElementRef;

  suggestedRestaurants: Restaurant[];
  suggeestedFlavors: Flavor[];


  constructor(private placeService: PlaceService) {

  }

  ngOnInit() {
    this.placeService.getSuggestedRestaurants().subscribe(data => {
      this.suggestedRestaurants = data;
    });

    this.placeService.getFlavors().subscribe(data => this.suggeestedFlavors = data);

  }
  cardwidth = 370;

  slideToLeft() {
    this.restaurantContent.nativeElement.scrollLeft -= 390;
  }

  slideToRight() {
    this.restaurantContent.nativeElement.scrollLeft += 390;
  }

}
