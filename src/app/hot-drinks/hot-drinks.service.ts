import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Drink } from '../models/drink.model';

@Injectable({
  providedIn: 'root'
})
export class HotDrinksService {
  public currentDrink: BehaviorSubject<Drink>;
  constructor() {
    this.currentDrink = new BehaviorSubject<Drink>(null);
  }

  public selectDrink(drink: Drink) {
    this.currentDrink.next(drink);
  }

  availableDrinks: Drink[] = [
    {
      "name": "Lemon Tea",
      "icon": "/assets/lemon-tea.svg",
      "steps": [
        "Boil some water",
        "Steep the water in the tea",
        "Pour tea in the cup",
        "Add lemon"
      ]
    },
    {
      "name": "Coffee",
      "icon": "/assets/coffee-cup.svg",
      "steps": [
        "Boil some water",
        "Brew the coffee grounds",
        "Pour coffee in the cup",
        "Add sugar and milk"
      ]
    },
    {
      "name": "Chocolate",
      "icon": "/assets/hot-chocolate.svg",
      "steps": [
        "Boil some water",
        "Add drinking chocolate powder to the water",
        "Pour chocolate in the cup"
      ]
    }
  ]
}