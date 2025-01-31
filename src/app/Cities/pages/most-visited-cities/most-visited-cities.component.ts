import { Component, OnInit } from '@angular/core';
import { CityService } from '../../services/city.service';
import { City, MostVisitedCity } from '../../interfaces/City.interface';

@Component({
  selector: 'app-most-visited-cities',
  templateUrl: './most-visited-cities.component.html',
  styleUrls: ['./most-visited-cities.component.css']
})
export class MostVisitedCitiesComponent implements OnInit {
  topCities:City[] = [];
  isError:boolean = true;

  constructor(private cityService: CityService) { }

  ngOnInit(): void {
     this.getMostVisitedCities()
  }

  getMostVisitedCities() {
    this.cityService.getMostVisitedCities()
      .subscribe({
        next: (result: MostVisitedCity) => {
          if ([result.message].includes("success")) {
            this.topCities = result.data;
            this.isError = false;
          }
        },
        error: (res) => {
          console.log("Something went wrong", res);
          this.isError = true;
        },
        complete: () => { },
      })
  }

}
