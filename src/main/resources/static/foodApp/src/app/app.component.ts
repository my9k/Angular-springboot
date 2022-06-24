import { Component } from '@angular/core';
import { HttpClientService } from './service/http-client.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'foodApp';

  food:any
  constructor(private f:HttpClientService){
    f.getData().subscribe(
      data=>this.food=data
    )
  }
}
