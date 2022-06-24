import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClientService,Food } from '../service/http-client.service';

@Component({
  selector: 'app-food',
  templateUrl: './food.component.html',
  styleUrls: ['./food.component.css']
})
export class FoodComponent implements OnInit {

  food : any
  constructor(
    private httpClientService:HttpClientService,
    private router:Router
  ) { }

  ngOnInit() {
    this.httpClientService.getData().subscribe(
      response=>{this.food=response;}
    );
  }
  deleteFood(food: Food): void {
    this.httpClientService.deleteFood(food)
      .subscribe( data => {
        this.food = this.food.filter(u => u !== food);
      })
  };
  updateFood(id){
    this.router.navigate(['update',id])
  }
}
