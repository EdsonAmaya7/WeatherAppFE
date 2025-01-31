import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { HttpClientModule } from '@angular/common/http';

import { MatCardModule } from '@angular/material/card';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { SharedModule } from './shared/shared.module';
import { CardComponent } from './Cities/components/card/card.component';
import { MostVisitedCitiesComponent } from './Cities/pages/most-visited-cities/most-visited-cities.component';
import { ForecastByCityComponent } from './Cities/pages/forecast-by-city/forecast-by-city.component';
import { ForecastCardComponent } from './Cities/components/forecast-card/forecast-card.component';
import { AppComponent } from './app.component';


@NgModule({
  declarations: [
    AppComponent,
    CardComponent,
    MostVisitedCitiesComponent,
    ForecastByCityComponent,
    ForecastCardComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MatCardModule,
    SharedModule,
    BrowserAnimationsModule,
    HttpClientModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
