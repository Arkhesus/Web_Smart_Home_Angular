import { Component, OnInit } from '@angular/core';
import { RestService, Category, Room, Sensor } from '../rest.service';
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['../menu.css']
})
export class CardComponent implements OnInit {

  sensors : Sensor[] = [];

  constructor(public rest: RestService, private router: Router) { }

  ngOnInit() {
    this.getSensor();
  }

  move(path, option=''){
    this.router.navigate([path + '/' + option])
  }

  // reload(str){
  //   this.router.navigateByUrl('/', {skipLocationChange: true}).then(()=>
  //  this.router.navigate([str]));
  // }
  

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
