import { Component, OnInit } from '@angular/core';
import { RestService, Category, Room } from '../rest.service';
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-new-sensor',
  templateUrl: './new-sensor.component.html',
  styleUrls: ['../menu.css']
})
export class NewSensorComponent implements OnInit {

  categories: Category[] = [];
  rooms: Room[] = [];

  newSensor = { name: '', Room: { name: '' }, Category: { name: '' } }

  alert = false;

  constructor(public rest: RestService, private router: Router) { }

  ngOnInit(): void {
    this.getCategory();
    this.getRoom();
  }

  addSensor() {
    console.log(this.newSensor);

    if (this.newSensor.name && this.newSensor.Category && this.newSensor.Room) {
      this.alert = false;
      this.rest.addSensor(this.newSensor).subscribe((result) => {
        this.router.navigate(['menu'])
        console.log("ok")
      }

      )
    } else {
      this.showMessageAlert();
    }
  }

  getCategory() {
    this.rest.getCategory().subscribe(
      (resp) => {
        this.categories = resp;
        console.log(this.categories)
      }
    )
  }

  getRoom() {
    this.rest.getRoom().subscribe(
      (resp) => {
        this.rooms = resp;
        console.log(this.rooms)
      }
    )
  }

  showMessageAlert() {
    this.alert = true
  }

  move(path) {
    this.router.navigate([path])
  }

}