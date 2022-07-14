import { Component } from '@angular/core';
import {ShoppingListService} from './share/shoppingList.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [ShoppingListService]
})
export class AppComponent {
  title = 'recipes-project';
  recipeState:boolean = true;
  shoppingState:boolean = false;

  onRecipesShown(state : {recipes:boolean, shopping:boolean}){
    this.recipeState = state.recipes;
    this.shoppingState = state.shopping;
  }

  onShoppingShown(state : {recipes:boolean, shopping:boolean}){
    this.recipeState = state.recipes;
    this.shoppingState = state.shopping;
  }
}
