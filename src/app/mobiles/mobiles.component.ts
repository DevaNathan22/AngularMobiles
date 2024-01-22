import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-mobiles',
  templateUrl: './mobiles.component.html',
  styleUrl: './mobiles.component.css'
})
export class MobilesComponent implements OnInit {
  mobiles:Mobiles[]=[];
  constructor(private http:HttpClient){}
    ngOnInit() {
      this.getMobilesDetails().subscribe(x=>this.mobiles=x);
    }
    getMobilesDetails() {
      return this.http.get<Mobiles[]>("http://localhost:8080/mobi");
    }
}
class Mobiles {
  id?:number;
	brand?:string;
	price?:string;
	batteryCapacity?:number;
	screenSize?:number;
}


