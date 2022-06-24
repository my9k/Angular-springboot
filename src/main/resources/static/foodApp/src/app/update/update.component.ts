import { Component, OnInit } from '@angular/core';
import { Food,HttpClientService } from '../service/http-client.service';
import { Router,ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-update',
  templateUrl: './update.component.html',
  styleUrls: ['./update.component.css']
})
export class UpdateComponent implements OnInit {
f:Food = new Food(null,"","");
id:number;
  constructor(private httpClient:HttpClientService,private router: Router,private route: ActivatedRoute) { }

  ngOnInit() {
    this.id = this.route.snapshot.params['id'];  
    this.httpClient.getFood(this.id).subscribe(data => {
      console.log(data)
      this.f = data as Food;
    }, error => console.log(error));;
  }

updateFood(){
  this.httpClient.updateFood(this.f).subscribe(data => {
    console.log(data);
    this.f = new Food(null,'','');
    this.router.navigate(['']);
  }, error => console.log(error));
}
}