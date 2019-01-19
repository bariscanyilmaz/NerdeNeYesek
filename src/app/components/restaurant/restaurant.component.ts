import { Component, ViewChild, ElementRef, OnInit, AfterViewInit,ChangeDetectorRef } from '@angular/core';
import { PlaceService } from 'src/app/services/place.service';
import { Router } from '@angular/router';
import { Restaurant } from 'src/app/models/restaurant';

declare var google: any;

@Component({
  selector: 'app-restaurant',
  templateUrl: './restaurant.component.html',
  styleUrls: ['./restaurant.component.css']
})

export class RestaurantComponent implements AfterViewInit {



  @ViewChild('map') gmap: ElementRef;
  map: any;
  marker: any;
  urlcombine: String[];
  value: String;
  restId: String;

  restaurant: Restaurant;

  constructor(private placeService: PlaceService, private router: Router) {

  }

  ngOnInit(): void {
    this.urlcombine = this.router.url.split('/');
    this.restId = this.urlcombine[2];
    this.getRestaurant();

  }

  ngAfterViewInit() {
    this.getMap();
  }

  getRestaurant() {
    this.placeService.getRestaurantById(this.restId).subscribe(data => {
      this.restaurant = data;
    });

  }


  getMap() {
    const mapProp = {
      center: new google.maps.LatLng(this.restaurant.location.lat, this.restaurant.location.lng),
      zoom: 15,
      mapTypeId: google.maps.MapTypeId.ROADMAP
    };

    this.map = new google.maps.Map(this.gmap.nativeElement, mapProp);
    this.marker = new google.maps.Marker({ position: mapProp.center, map: this.map, label: this.restaurant.name });

  }

}
