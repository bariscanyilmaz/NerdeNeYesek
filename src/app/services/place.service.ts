import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Restaurant } from '../models/restaurant';
import { Flavor } from '../models/flavor';
import { Observable, of } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class PlaceService {
  
  
  
  suggeestedFlavors: Flavor[] = [
    new Flavor('evyemekleri','Ev Yemekleri','./assets/evyemekleri.jpg'),
    new Flavor('tatlilar','Tatlılar','./assets/tatlilar.jpg'),
    new Flavor('steak','Steak','./assets/steak.jpg'),
    new Flavor('yoresellezzetler','Yöresel Lezzetler','./assets/yoresel.jpg'),
    new Flavor('balik','Balık','./assets/balik.jpg')
  ];

  

  places:Restaurant[]=[
    new Restaurant('sevgievyemekleri','Lorem ipsum dolor sit amet consectetur adipisicing elit. Error voluptatem odit aperiam?',4,'Vedat Milor','restaurant.jpg','Sevgi Ev Yemekleri','evyemekleri','Lorem ipsum dolor sit amet consectetur adipisicing elit. Tenetur veniam aperiam, ducimus eveniet, eligendi mollitia voluptate totam sapiente optio error dolore voluptas sint, enim ipsum. Modi quam voluptatum dolore obcaecati?',{lat:40.2108339, lng:28.9707253}),
    new Restaurant('annemevyemekleri','Lorem ipsum dolor sit amet consectetur adipisicing elit. Error voluptatem odit aperiam?',4,'Vedat Milor','restaurant.jpg','Annem Yemekleri','evyemekleri','Lorem ipsum dolor sit amet consectetur adipisicing elit. Tenetur veniam aperiam, ducimus eveniet, eligendi mollitia voluptate totam sapiente optio error dolore voluptas sint, enim ipsum. Modi quam voluptatum dolore obcaecati?',{lat:40.2102532,lng:28.9765447}),
    new Restaurant('fasulyeli','Lorem ipsum dolor sit amet consectetur adipisicing elit. Error voluptatem odit aperiam?',4,'Vedat Milor','restaurant.jpg','Fasuyeli','evyemekleri','Lorem ipsum dolor sit amet consectetur adipisicing elit. Tenetur veniam aperiam, ducimus eveniet, eligendi mollitia voluptate totam sapiente optio error dolore voluptas sint, enim ipsum. Modi quam voluptatum dolore obcaecati?',{lat:40.204027,lng:28.9430793}),
    new Restaurant('uzaypastanesi','Lorem ipsum dolor sit amet consectetur adipisicing elit. Error voluptatem odit aperiam?',4,'Vedat Milor','restaurant.jpg','Uzay Pastanesi','tatlilar','Lorem ipsum dolor sit amet consectetur adipisicing elit. Tenetur veniam aperiam, ducimus eveniet, eligendi mollitia voluptate totam sapiente optio error dolore voluptas sint, enim ipsum. Modi quam voluptatum dolore obcaecati?',{lat:40.2073514,lng:28.9859367}),
    new Restaurant('pidestore','Lorem ipsum dolor sit amet consectetur adipisicing elit. Error voluptatem odit aperiam?',4,'Vedat Milor','restaurant.jpg','Pide Store','yoresellezzetler','Lorem ipsum dolor sit amet consectetur adipisicing elit. Tenetur veniam aperiam, ducimus eveniet, eligendi mollitia voluptate totam sapiente optio error dolore voluptas sint, enim ipsum. Modi quam voluptatum dolore obcaecati?',{lat:40.2067229,lng:28.9866619}),
    new Restaurant('ulkupastanesi','Lorem ipsum dolor sit amet consectetur adipisicing elit. Error voluptatem odit aperiam?',4,'Vedat Milor','restaurant.jpg','Ulku Pastanesi','tatlilar','Lorem ipsum dolor sit amet consectetur adipisicing elit. Tenetur veniam aperiam, ducimus eveniet, eligendi mollitia voluptate totam sapiente optio error dolore voluptas sint, enim ipsum. Modi quam voluptatum dolore obcaecati?',{lat:40.2145414,lng:28.9766424}),
    new Restaurant('bambaskalezzetler','Lorem ipsum dolor sit amet consectetur adipisicing elit. Error voluptatem odit aperiam?',4,'Vedat Milor','restaurant.jpg','Bambaşka Lezzetler','evyemekleri','Lorem ipsum dolor sit amet consectetur adipisicing elit. Tenetur veniam aperiam, ducimus eveniet, eligendi mollitia voluptate totam sapiente optio error dolore voluptas sint, enim ipsum. Modi quam voluptatum dolore obcaecati?',{lat:40.2127875,lng:28.9785802}),
    new Restaurant('gomlekli','Lorem ipsum dolor sit amet consectetur adipisicing elit. Error voluptatem odit aperiam?',3,'Vedat Milor','restaurant.jpg','Gömlekli','steak','Lorem ipsum dolor sit amet consectetur adipisicing elit. Tenetur veniam aperiam, ducimus eveniet, eligendi mollitia voluptate totam sapiente optio error dolore voluptas sint, enim ipsum. Modi quam voluptatum dolore obcaecati?',{lat:40.2111437,lng:28.9324526}),
    new Restaurant('kardeslerpide','Lorem ipsum dolor sit amet consectetur adipisicing elit. Error voluptatem odit aperiam?',3,'Vedat Milor','restaurant.jpg','Kardeşler Pide','yoresellezzetler','Lorem ipsum dolor sit amet consectetur adipisicing elit. Tenetur veniam aperiam, ducimus eveniet, eligendi mollitia voluptate totam sapiente optio error dolore voluptas sint, enim ipsum. Modi quam voluptatum dolore obcaecati?',{lat:40.2070174,lng:28.9861218}),
    new Restaurant('niluferbalikcisi','Lorem ipsum dolor sit amet consectetur adipisicing elit. Error voluptatem odit aperiam?',4,'Vedat Milor','restaurant.jpg','Nilüfer Balıkçısı','balik','Lorem ipsum dolor sit amet consectetur adipisicing elit. Tenetur veniam aperiam, ducimus eveniet, eligendi mollitia voluptate totam sapiente optio error dolore voluptas sint, enim ipsum. Modi quam voluptatum dolore obcaecati?',{lat:40.211255,lng:28.9877733})
  ];

  constructor(private http:HttpClient) { 
  }

  getRestaurantById(id:String){
    return of(this.places.find(place=>place.placeId==id));
  }

  getRestaurants(){
    return of(this.places);
  }
	getFlavors(){
    return of(this.suggeestedFlavors);
  }
	getRestaurantsByFlavor(flavor:String){
    return of(this.places.filter(r=>r.flavorName==flavor));
  }
	getFlavorById(flavorId:String){
    return of(this.suggeestedFlavors.find(f=>f.flavorId==flavorId)); 
  }
  
  getSuggestedRestaurants(){
    return of(this.places.slice(0,5));
  }


}
