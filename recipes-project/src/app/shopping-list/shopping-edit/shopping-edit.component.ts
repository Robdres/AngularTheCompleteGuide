import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import {Ingredient} from 'src/app/share/ingredients.model';

@Component({
  selector: 'app-shopping-edit',
  templateUrl: './shopping-edit.component.html',
  styleUrls: ['./shopping-edit.component.css']
})
export class ShoppingEditComponent implements OnInit {
  
  ingredientName:string="";
  ingredientAmount:number = 0;

  @Output('ingredient') ingredientAdded = new EventEmitter<Ingredient>();
  
  constructor() { }

  ngOnInit(): void {
  }
  
  addIngredient(){
    this.ingredientAdded.emit(new Ingredient(this.ingredientName,this.ingredientAmount));
  }
}
