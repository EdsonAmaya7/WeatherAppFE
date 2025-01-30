import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";

import { MostVisitedCitiesComponent } from "./Cities/pages/most-visited-cities/most-visited-cities.component";
import { ForecastByCityComponent } from "./Cities/pages/forecast-by-city/forecast-by-city.component";


const routes: Routes = [
    {
        path: '',
        component: MostVisitedCitiesComponent,
        pathMatch: 'full'
    },
    {
        path: 'city/:id',
        component: ForecastByCityComponent,
      },
    {
        path: '**',
        redirectTo: ''
    }
];

@NgModule({
    imports: [
        RouterModule.forRoot(routes)
    ],
    exports: [
        RouterModule
    ],
})
export class AppRoutingModule { }