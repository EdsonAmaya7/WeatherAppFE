import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent implements OnInit {
  cardsQuantity: number[] = [1, 2, 3, 4, 5,6,7,8,9,10];
  citiesQuantity = this.cardsQuantity.length;
  constructor() { }

  ngOnInit(): void {
  }

}
