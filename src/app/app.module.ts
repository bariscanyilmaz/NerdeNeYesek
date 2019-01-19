import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { HomeComponent } from './components/home/home.component';
import { FlavorComponent } from './components/flavor/flavor.component';
import { RestaurantComponent } from './components/restaurant/restaurant.component';
import { ParentComponent } from './components/parent/parent.component';
import { PlaceCardComponent } from './components/place-card/place-card.component';
import { FlavorCardComponent } from './components/flavor-card/flavor-card.component';
import { RatingModule } from 'primeng/rating';
import { FormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    HomeComponent,
    RestaurantComponent,
    FlavorComponent,
    ParentComponent,
    PlaceCardComponent,
    FlavorCardComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    BrowserAnimationsModule,
    FormsModule,
    RatingModule,

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
