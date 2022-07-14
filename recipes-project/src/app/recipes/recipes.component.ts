import { Component, OnInit } from '@angular/core';
import {RecipesService} from '../share/recipes.services';
import {Recipe} from './recipe.model';

@Component({
  selector: 'app-recipes',
  templateUrl: './recipes.component.html',
  styleUrls: ['./recipes.component.css'],
  providers: [RecipesService]
})
export class RecipesComponent implements OnInit {
  recipeActual:Recipe;

  constructor(private recipeService:RecipesService) { }

  ngOnInit(): void {
    this.recipeService.recipeSelected.subscribe(
      (recipe:Recipe)=> {
        this.recipeActual = recipe;
      }
    )
  }


}
