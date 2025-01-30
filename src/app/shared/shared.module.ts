import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';


import { MatIconModule } from '@angular/material/icon';

import { HeaderComponent } from './header/header.component';
import { SearchBarComponent } from './search-bar/search-bar.component';



@NgModule({
  declarations: [
    
    HeaderComponent,
    SearchBarComponent
  ],
  
  exports: [
    MatIconModule,
    HeaderComponent,
    SearchBarComponent 
  ],
  imports: [
    CommonModule,
    RouterModule,
    MatIconModule
  ]
})
export class SharedModule { }
