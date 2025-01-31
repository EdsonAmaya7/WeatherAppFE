import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-forecast-card',
  templateUrl: './forecast-card.component.html',
  styleUrls: ['./forecast-card.component.css']
})
export class ForecastCardComponent implements OnInit {
  weeklyForecast: number[] = [1, 2, 3, 4, 5, 6, 7];
  forecastQuantity = this.weeklyForecast.length;
  
  constructor() { }

  ngOnInit(): void {
  }

}
