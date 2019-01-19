import { Component, OnInit, Input, HostListener } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'flavor-card',
  templateUrl: './flavor-card.component.html',
  styleUrls: ['./flavor-card.component.css']
})
export class FlavorCardComponent implements OnInit {

  constructor(private route:Router) { }

  ngOnInit() {
  }

  @Input('flavor-id') flavorId:String;
  @Input('flavor-name') flavorName:String;
  @Input('flavor-img') flavorImage:String;

  @HostListener('click')
  redirecTo(){
    this.route.navigate(['flavor/'+this.flavorId]);
  }

}
