import { Component, OnInit } from '@angular/core';
import { HotDrinksService } from './hot-drinks.service';
import { Drink } from '../models/drink.model';

@Component({
  selector: 'app-hot-drinks',
  templateUrl: './hot-drinks.component.html',
  styleUrls: ['./hot-drinks.component.css']
})
export class HotDrinksComponent implements OnInit {

  constructor(private _hotDrinksService: HotDrinksService) { }

  public availableDrinks: Drink[];

  ngOnInit():void {
    this.availableDrinks = this._hotDrinksService.availableDrinks;
  }

  public makeDrink(drink: Drink):void {
    if (this._hotDrinksService.currentDrink.value === null) {
      this._hotDrinksService.selectDrink(drink);
    }
  }
}