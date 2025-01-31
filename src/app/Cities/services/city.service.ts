import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';

import { MostVisitedCity } from '../interfaces/City.interface';

@Injectable({
  providedIn: 'root'
})

export class CityService {

  constructor(private http:HttpClient) { }

  private baseUrl:string = environment.baseUrl;

  getMostVisitedCities(){
    return this.http.get<MostVisitedCity>(`${this.baseUrl}City`);
  }
  
}
