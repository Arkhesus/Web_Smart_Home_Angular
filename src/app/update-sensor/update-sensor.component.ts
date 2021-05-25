import { Component, OnInit } from '@angular/core';
import {Router, ActivatedRoute, Params} from '@angular/router';
import { RestService, Category, Room, Sensor} from '../rest.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-update-sensor',
  templateUrl: './update-sensor.component.html',
  styleUrls: ['../menu.css']
})
export class UpdateSensorComponent implements OnInit {

  sensors : Sensor[] = [];
  id_sensor
  id_room
  newsensors = { id:"", name : '', Category : { id:'',name: ''}, Room : {id:'', name: ''}};
  categories : Category[] = [];
  rooms : Room[] = [];
  params :string

  constructor(private activatedRouter: ActivatedRoute, public rest: RestService, private router: Router) { 

    this.params = this.activatedRouter.snapshot.paramMap.get('sensor');
    console.log(this.params);
  }

  ngOnInit(): void {
    this.getSensor();
    this.getCategory();
    this.getRoom();
  }

  getSensor(){
    this.rest.getSensor(this.params).subscribe(
      (resp) => {
        this.sensors = resp;
        console.log(this.sensors)
        console.log(resp)
        this.id_sensor = resp[0].id
        console.log(resp)
        this.newsensors.name = resp[0].Name
      }
    )
  }

  getCategory(){
    this.rest.getCategory().subscribe(
      (resp) => {
        this.categories = resp;
        console.log(this.categories)
      }
    )
  }

  getRoom(){
    this.rest.getRoom().subscribe(
      (resp) => {
        this.rooms = resp;
        console.log(this.rooms)
      }
    )
  }


  updateSensor(){
  
    this.newsensors.id =  this.id_sensor.toString()
    this.rest.getidRoom(this.newsensors.Room.name).subscribe((resp) => {
      console.log(resp)
      this.newsensors.Room.id = resp[0].id.toString()
    })

    this.rest.getidCategory(this.newsensors.Category.name).subscribe((resp) => {
      console.log(resp)
      this.newsensors.Category.id = resp[0].id.toString()
    })
    
    // this.newsensors.Room.id = this.getidRoom(this.newsensors.Room.Name)
   

    // console.log("---", this.rest.getidRoom(this.newsensors.Room.Name))

    this.rest.putSensor(this.newsensors).subscribe(
      (resp) => {
        console.log("---", this.newsensors)
        this.router.navigate(['menu'])
      }
    )

    console.log(this.newsensors)
  }

  move(path){
    this.router.navigate([path])
  }

}
