import { Component, OnInit, AfterViewInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements AfterViewInit {
  

  constructor(private router: Router) {

  }

  urlcombine: String[] = this.router.url.split('/');
  category: String=this.urlcombine[1];
  value: String=this.urlcombine[2];

  ngAfterViewInit(): void {
    if (this.urlcombine[1].toLocaleLowerCase().toString() =='restaurant') {
      this.category = "Restoran";
    } else if (this.urlcombine[1].toLocaleLowerCase().toString() == 'flavor') {
      this.category = "Tatlar";
    }

    console.log(this.category);
  }

  getRestaurantById(placeId: String) {

  }

  getRestaurantsByFlavor(flavor: String) {

  }

}