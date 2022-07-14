import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import {Recipe} from '../recipe.model';
import {RecipesService} from 'src/app/share/recipes.services';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css'],
})
export class RecipeListComponent implements OnInit {

  recipes: Recipe[] =[]

  constructor(private recipesService: RecipesService) { 
  }

  ngOnInit(): void {
    this.recipes = this.recipesService.getRecipes();
    this.recipesService.recipeSelected.emit(this.recipes[0]);
  }

  onClicked(recipe:Recipe){
    this.recipesService.recipeSelected.emit(recipe);
  }
}
