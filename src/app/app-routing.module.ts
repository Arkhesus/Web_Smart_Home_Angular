import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {UpdateCategoryComponent} from './update-category/update-category.component';
import { AppComponent } from './app.component';
import { MenuComponent} from './menu/menu.component';
import {UpdateRoomComponent} from './update-room/update-room.component';
import {NewSensorComponent} from './new-sensor/new-sensor.component';
import { UpdateSensorComponent } from './update-sensor/update-sensor.component';

const routes: Routes = [
  {
    path:'updateCategory',
    component : UpdateCategoryComponent
  },
  {
    path:'updateRoom',
    component:UpdateRoomComponent
  },
  {
    path:"menu",
    component : MenuComponent
  },
  {
    path:"newSensor",
    component:NewSensorComponent
  },
  {
    path:"updateSensor/:sensor",
    component:UpdateSensorComponent
  },
  {
    path:'',
    redirectTo:"/menu",
    pathMatch:"full"
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
