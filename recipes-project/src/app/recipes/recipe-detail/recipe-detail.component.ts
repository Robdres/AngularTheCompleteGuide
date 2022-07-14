import { Component, Input, OnInit } from '@angular/core';
import {ShoppingListService} from 'src/app/share/shoppingList.service';
import {Recipe} from '../recipe.model';

@Component({
  selector: 'app-recipe-detail',
  templateUrl: './recipe-detail.component.html',
  styleUrls: ['./recipe-detail.component.css']
})
export class RecipeDetailComponent implements OnInit {
  @Input('recipe') recipeChosen:Recipe;

  constructor(private shoppingListService: ShoppingListService) { }

  ngOnInit(): void {
  }
  
  addIngredients(){
    for(let ingre of this.recipeChosen.ingredients){
      this.shoppingListService.addIngredient(ingre);
    }
  }
}
