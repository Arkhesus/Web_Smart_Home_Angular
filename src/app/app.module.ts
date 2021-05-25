import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { HttpClientModule} from '@angular/common/http';
import { FilterComponent } from './filter/filter.component';
import { CardComponent } from './card/card.component';
import { UpdateCategoryComponent } from './update-category/update-category.component';
import { MenuComponent } from './menu/menu.component';
import { UpdateRoomComponent } from './update-room/update-room.component';
import { NewSensorComponent } from './new-sensor/new-sensor.component';
import { UpdateSensorComponent } from './update-sensor/update-sensor.component';

import {FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    FilterComponent,
    CardComponent,
    UpdateCategoryComponent,
    MenuComponent,
    UpdateRoomComponent,
    NewSensorComponent,
    UpdateSensorComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
