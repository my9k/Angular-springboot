import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'

export class Food{
  constructor(
    public id:number,
    public name:string,
    public price:string
  ){}
}
@Injectable({
  providedIn: 'root'
})

export class HttpClientService {
  constructor(
    private httpClient:HttpClient
  ) { }
  public getData(){
    let url = "http://192.168.49.2:30167/food/api/"
    return this.httpClient.get(url)
  }
  // getFood(){
  //   return this.httpClient.get<Food[]>('http://localhost:8080/food/api/');
  // }
  getFood(id){
    let url = "http://192.168.49.2:30167/food/api/" + id;
    return this.httpClient.get(url);
  }

  public deleteFood(f) {
    return this.httpClient.delete<Food>("http://192.168.49.2:30167" + "/"+ f.id);
  }

  public createFood(f:Food) {
    return this.httpClient.post<Food>("http://192.168.49.2:30167/food/api/", f);
  }
  public updateFood(f) {
    return this.httpClient.put<Food>("http://192.168.49.2:30167/food/api" + "/"+ f.id,f);
  }

}
