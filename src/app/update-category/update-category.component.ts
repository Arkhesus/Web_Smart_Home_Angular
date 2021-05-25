import { Component, OnInit } from '@angular/core';
import { RestService, Category, Room } from '../rest.service';
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common';



export class AppModule { }

@Component({
  selector: 'app-update-category',
  templateUrl: './update-category.component.html',
  styleUrls: ['../menu.css']
})
export class UpdateCategoryComponent implements OnInit {

  categories : Category[] = [];
  newCategory = { name:'' }
  dltCategory = { name:'' }

  public alert = false;

  constructor(public rest: RestService, private router: Router) { }

  ngOnInit(): void {
    this.getCategory();
  }

  getCategory(){
    this.rest.getCategory().subscribe(
      (resp) => {
        this.categories = resp;
        console.log(this.categories)
      }
    )
  }

  addCategory(){
    console.log(this.newCategory);

    if(this.newCategory.name){
    this.rest.addCategory(this.newCategory).subscribe((result) => {
      if(result){
        this.router.navigate(['menu'])
        console.log("ok")        
      }

    } 
     )
  }else{
    this.showMessageAlert();
  }

}

  showMessageAlert() {
      this.alert = true
  }

  deleteCategory(){
    console.log(this.dltCategory.name);
    if(this.dltCategory.name){
    this.rest.deleteCategory(this.dltCategory).subscribe((result) => {
      if(result){
        this.router.navigate(['menu'])
        console.log("ok")
      }
    } 
     )
  }else{
    console.log("no ok ")
    this.showMessageAlert();
  }
  }

  move(path){
    this.router.navigate([path])
  }

}
