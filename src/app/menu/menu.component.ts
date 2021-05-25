import { Component, OnInit } from '@angular/core';
import { RestService, Category, Room, Sensor } from '../rest.service';
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common';
import { CardComponent} from '../card/card.component';




@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['../menu.css']
})
export class MenuComponent implements OnInit {


  constructor(public rest: RestService, private router: Router) { }

  categories : Category[] = [];
  rooms : Room[] = [];

  sensors : Sensor[] = [];

  filter_cat = "";
  filter_room = "";

  ngOnInit(): void {
    this.getSensor();
    this.getCategory();
    this.getRoom();
  }

  getCategory(){
    this.rest.getCategory().subscribe(
      (resp) => {
        this.categories = resp;
        console.log(this.categories)
      }
    )
  }

  move(path){
    this.router.navigate([path])
  }

  moveSensor(path, option=''){
    this.router.navigate([path + '/' + option])
  }

  getRoom(){
    this.rest.getRoom().subscribe(
      (resp) => {
        this.rooms = resp;
        console.log(this.rooms)
      }
    )
  }

  filter(){

    var sensor_to_filter;


  var filtered_sensors = [];

  this.rest.getSensors().subscribe(
    (resp) => {
      sensor_to_filter = resp;

      if(!this.filter_cat && ! this.filter_room){
        filtered_sensors = sensor_to_filter;
      }else{
        sensor_to_filter.forEach(element => {

          if (!this.filter_cat){
            console.log("in")
            console.log(this.filter_cat)
            console.log(element.Category.name)
            if(element.Room.name == this.filter_room){
              filtered_sensors.push(element)
              console.log("In 2")
            }
          }
          else if (!this.filter_room){
            console.log("In")
            if(element.Category.name == this.filter_cat){
              console.log("in 2")
              filtered_sensors.push(element)
            } 
          }else{
            console.log("IN")
            if(element.Room.name == this.filter_room && element.Category.name == this.filter_cat){
              filtered_sensors.push(element)
              console.log("IN 2")
            }
          }
          });
      }

      this.sensors = filtered_sensors
    }
  )



  }

  getSensor(){
    this.rest.getSensors().subscribe(
      (resp) => {
        this.sensors = resp;
        console.log(this.sensors)
      }
    )
  }

  deleteSensor(sensor){
    console.log("---", sensor)
    this.rest.deleteSensor(sensor).subscribe(
      (resp) => {
        sensor = resp;
        console.log(sensor)
        this.ngOnInit()
      }
    )
  }


}
