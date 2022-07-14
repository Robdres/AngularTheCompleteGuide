import {EventEmitter} from "@angular/core";
import {Ingredient} from "./ingredients.model";

export class ShoppingListService {
  ingredientsChanged = new EventEmitter<Ingredient[]>();

  private ingredients: Ingredient[] = [
    new Ingredient("Apple",10),
    new Ingredient("Banana",100)
  ];

  getIngredients():Ingredient[]{
    return this.ingredients.slice();
  }

  addIngredient(ingredient:Ingredient):void {
    this.ingredients.push(ingredient);
    this.ingredientsChanged.emit(this.ingredients.slice());
  }
}
