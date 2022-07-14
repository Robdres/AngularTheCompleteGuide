import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  @Output() RecipesShown = new EventEmitter<{recipes:boolean,shopping:boolean}>();
  @Output() ShoppingShown = new EventEmitter<{recipes:boolean,shopping:boolean}>();

  collapsed:boolean = true;

  constructor() { }

  ngOnInit(): void {
  }

  showRecipes(){
    this.RecipesShown.emit({
      recipes: true,
      shopping: false
    })
  }

  showShoppingList(){
    this.ShoppingShown.emit({
      recipes:false,
      shopping: true
    })
  }



}
