import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-forecast-by-city',
  templateUrl: './forecast-by-city.component.html',
  styleUrls: ['./forecast-by-city.component.css']
})
export class ForecastByCityComponent implements OnInit {

  cityId:any;

  constructor(
    private route: ActivatedRoute
  ) { }

  ngOnInit(): void {
    this.cityId = this.route.snapshot.paramMap.get('id')
    console.log("city id", this.cityId);
    if (this.cityId) {
      this.cityId = JSON.parse(this.cityId);
      console.log(this.cityId);
    }
  }

}
