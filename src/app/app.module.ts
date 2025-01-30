import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { SharedModule } from './shared/shared.module';
import { CardComponent } from './Cities/components/card/card.component';
import { MostVisitedCitiesComponent } from './Cities/pages/most-visited-cities/most-visited-cities.component';
import { ForecastByCityComponent } from './Cities/pages/forecast-by-city/forecast-by-city.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import {MatCardModule} from '@angular/material/card';

@NgModule({
  declarations: [
    AppComponent,
    CardComponent,
    MostVisitedCitiesComponent,
    ForecastByCityComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MatCardModule,
    SharedModule,
    BrowserAnimationsModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
