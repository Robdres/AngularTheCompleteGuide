import { Component, OnInit } from '@angular/core';
import {Ingredient} from '../share/ingredients.model';
import {ShoppingListService} from '../share/shoppingList.service';

@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.css']
})
export class ShoppingListComponent implements OnInit {
  ingredients: Ingredient[] = [];
  constructor(private shoppingListService:ShoppingListService) { }

  ngOnInit(): void {
    this.ingredients = this.shoppingListService.getIngredients();
    this.shoppingListService.ingredientsChanged.subscribe(
      (ingres:Ingredient[])=>{
        this.ingredients = ingres;
      }
    )
  }

  addIngredient(ingre:Ingredient){
    this.shoppingListService.addIngredient(ingre);
  }

}
