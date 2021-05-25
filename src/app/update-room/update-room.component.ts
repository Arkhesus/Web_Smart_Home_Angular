import { Component, OnInit } from '@angular/core';
import { RestService, Category, Room } from '../rest.service';
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-update-room',
  templateUrl: './update-room.component.html',
  styleUrls: ['../menu.css']
})
export class UpdateRoomComponent implements OnInit {

  rooms : Room[] = [];
  newRoom = { name:'' }
  dltRoom = { name:'' }

  alert = false;

  constructor(public rest: RestService, private router: Router) { 
    
  }

  ngOnInit(): void {
    this.getRoom();
  }

  getRoom(){
    this.rest.getRoom().subscribe(
      (resp) => {
        this.rooms = resp;
        console.log(this.rooms)
      }
    )
  }

  addRoom(){
    console.log(this.newRoom);

    if(this.newRoom.name){
      this.alert = false;
      this.rest.addRoom(this.newRoom).subscribe((result) => {
      this.router.navigate(['menu'])
      console.log("ok")
    } 
     )
  }else{
    this.showMessageAlert();
  }
}

  deleteRoom(){
    console.log(this.dltRoom);

    if(this.dltRoom.name){
      this.alert = false
      this.rest.deleteRoom(this.dltRoom).subscribe((result) => {
      this.router.navigate(['menu'])
      console.log("ok")
    } 
     )
  }else{
    this.showMessageAlert()
  }
}

showMessageAlert() {
  this.alert = true
}

  move(path){
    this.router.navigate([path])
  }

}
