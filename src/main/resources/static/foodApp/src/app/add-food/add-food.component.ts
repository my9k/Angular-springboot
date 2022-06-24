import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClientService, Food } from '../service/http-client.service';
@Component({
  selector: 'app-add-food',
  templateUrl: './add-food.component.html',
  styleUrls: ['./add-food.component.css']
})
export class AddFoodComponent implements OnInit {

  user: Food = new Food(null,"","");
  constructor(
    private httpClientService : HttpClientService,
    private router : Router
  ) { }

  ngOnInit() {
  }
  createFood(){
    console.log(this.user)

    this.httpClientService.createFood(this.user)
        .subscribe( data => {
          alert("Food added successfully.");
          this.router.navigate(['']);
        },err=>{console.log(err)});
  };
}
