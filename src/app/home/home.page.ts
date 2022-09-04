import { Component } from '@angular/core';
import { IonicRestService } from '../services/service.service';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  constructor(private webService: IonicRestService ) {}

  onClickFetch(){
      this.webService.getData().subscribe(response=>{
      console.log('response value is here',response);
    })
  }

  onClickPost(){
    let data = {
      name: 'Abhishek',
      salary: '28LPA',
      age: 22,
    };

    this.webService.postData(data).subscribe(response=>{
      console.log('response value: ',response);
    })

  }

}
