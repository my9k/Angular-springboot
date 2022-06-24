import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { FoodComponent } from './food/food.component';
import { AddFoodComponent } from './add-food/add-food.component';
import { UpdateComponent } from './update/update.component';
const routes: Routes = [
  {path:'' , component : FoodComponent},
  {path:'addfood' , component : AddFoodComponent},
  { path:'update/:id', component: UpdateComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
