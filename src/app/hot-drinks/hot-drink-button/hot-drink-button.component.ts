import { Component, Input, OnInit } from '@angular/core';
import { Drink } from '../../models/drink.model';
import { HotDrinksService } from '../hot-drinks.service';

@Component({
  selector: 'app-hot-drink-button',
  templateUrl: './hot-drink-button.component.html',
  styleUrls: ['./hot-drink-button.component.css']
})
export class HotDrinkButtonComponent implements OnInit {
  
  constructor(private _hotDrinksService: HotDrinksService) { }

  @Input() buttonName: string;
  @Input() buttonIcon: string;
  selectedDrink:       Drink;

  ngOnInit() {
    this._hotDrinksService.currentDrink.subscribe((drink: Drink) => {
      this.selectedDrink = drink;
    })
  }
}