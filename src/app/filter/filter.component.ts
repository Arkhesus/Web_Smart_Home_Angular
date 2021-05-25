import { Component, OnInit } from '@angular/core';
import { RestService, Category, Room } from '../rest.service';
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common';
import { CardComponent} from '../card/card.component';

@Component({
  selector: 'app-filter',
  templateUrl: './filter.component.html',
  styleUrls: ['../menu.css']
})
export class FilterComponent implements OnInit {

  categories : Category[] = [];
  rooms : Room[] = [];

  filter_cat = "";
  filter_room = "";

  constructor(public rest: RestService, private router: Router) { }

  ngOnInit(): void {
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

  getRoom(){
    this.rest.getRoom().subscribe(
      (resp) => {
        this.rooms = resp;
        console.log(this.rooms)
      }
    )
  }

  filter(){
    this.rest.filter(this.filter_cat,this.filter_room).subscribe(
      (resp) => {

        console.log(this.rooms)
      }
    )
  }

}