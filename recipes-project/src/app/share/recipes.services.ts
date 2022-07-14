import {EventEmitter, OnInit} from "@angular/core";
import {Recipe} from "../recipes/recipe.model";
import {Ingredient} from "./ingredients.model";

export class RecipesService {
  private recipes: Recipe[] = [
    new Recipe("test recipe 1","desc","https://images.immediate.co.uk/production/volatile/sites/30/2020/08/chorizo-mozarella-gnocchi-bake-cropped-9ab73a3.jpg", [
      new Ingredient("Mozarella",4),
      new Ingredient("Pasta",3),

    ]),
    new Recipe("test recipe 2","desc2","https://images.immediate.co.uk/production/volatile/sites/30/2020/08/chorizo-mozarella-gnocchi-bake-cropped-9ab73a3.jpg",[
      new Ingredient("Pasta",3),
      new Ingredient("Meat",3),
    ]),
  ];

  recipeSelected = new EventEmitter<Recipe>();

  getRecipes(){
    return this.recipes.slice();
  }
}
