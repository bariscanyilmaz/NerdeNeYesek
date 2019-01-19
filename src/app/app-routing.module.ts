import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { FlavorComponent } from './components/flavor/flavor.component';
import { RestaurantComponent } from './components/restaurant/restaurant.component';
import { ParentComponent } from './components/parent/parent.component';

FlavorComponent
const routes: Routes = [
  {
    path:'',
    component:HomeComponent
  },
  {
    path:'Home',
    component:HomeComponent
  },{
    path:'flavor',
    component:ParentComponent,
    children:[
      {path:':flavor',component:FlavorComponent}
    ]
  },{
    path:'restaurant',
    component:ParentComponent,
    children:[
      {path:':restaurant',component:RestaurantComponent}
    ]
  },{
    path:'**',
    redirectTo:'Home'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }