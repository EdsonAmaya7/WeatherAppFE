import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { City } from '../../interfaces/City.interface';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent implements OnInit {
  @Input() topCities: City[] = []


  constructor(
    private router: Router
  ) {
  }

  ngOnInit(): void {
  }


  getInfoByCity(city: City) {
    console.log(city);
    this.router.navigate(['city/', { id: JSON.stringify(city) }])
  }

  getWeatherClass(description: string) {
    return description.toLowerCase().replace(" ", "_")

  }

  getWeatherIcon(description: string): string {
    const iconMap: { [key: string]: string } = {
      'broken clouds': 'partly_cloudy_day',
      'overcast clouds': 'partly_cloudy_day',
      'scattered clouds': 'filter_drama',
      'few clouds': 'cloud',
      'clouds': 'cloud_alert',
      'light rain': 'rainy_light',
      'clear sky': 'cloud_off',
      'clear': 'cloud_off',
      'sunny': 'light_mode',
    };

    return iconMap[description.toLowerCase().trim()] || 'light_mode';
  }


}
