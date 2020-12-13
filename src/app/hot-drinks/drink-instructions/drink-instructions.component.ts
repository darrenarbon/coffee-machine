import { Component, OnInit } from '@angular/core';
import { Drink } from 'src/app/models/drink.model';
import { HotDrinksService } from '../hot-drinks.service';

@Component({
  selector: 'app-drink-instructions',
  templateUrl: './drink-instructions.component.html',
  styleUrls: ['./drink-instructions.component.css']
})
export class DrinkInstructionsComponent implements OnInit {
  public currentDrink: Drink;
  constructor(private _hotDrinksService: HotDrinksService) { }

  ngOnInit() {
    this._hotDrinksService.currentDrink.subscribe((drink: Drink) => {
      this.currentDrink = drink;
    })
  }

  public newDrink() {
    this._hotDrinksService.selectDrink(null);
  }
}