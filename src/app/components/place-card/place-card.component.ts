import { Component, OnInit, Input, HostListener } from '@angular/core';
import { Router } from '@angular/router';


@Component({
  selector: 'place-card',
  templateUrl: './place-card.component.html',
  styleUrls: ['./place-card.component.css']
})
export class PlaceCardComponent implements OnInit {

  constructor(private route: Router) { }

  ngOnInit() {
  }

  @Input('place-id') id: String;
  @Input('summary') summary: string;
  @Input('rating') rating: number;
  @Input('author') author: string;
  @Input('image-src') imageSrc: string;
  @Input('restaurant-name') name: string;
  @Input('cover-photo') coverphoto:String;

  @HostListener('click')
  redirectTo() {
    this.route.navigate(['/restaurant/' + this.id]);
  }


  val1: Number = 4;

}
