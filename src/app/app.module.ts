import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HotDrinkButtonComponent } from './hot-drinks/hot-drink-button/hot-drink-button.component';
import { HeaderComponent } from './header/header.component';
import { HotDrinksComponent } from './hot-drinks/hot-drinks.component';
import { DrinkInstructionsComponent } from './hot-drinks/drink-instructions/drink-instructions.component';

@NgModule({
  declarations: [
    AppComponent,
    HotDrinkButtonComponent,
    HeaderComponent,
    HotDrinksComponent,
    DrinkInstructionsComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
