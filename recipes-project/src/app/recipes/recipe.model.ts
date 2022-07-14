import {Ingredient} from "../share/ingredients.model";

export class Recipe{
  public name: string;
  public description:string;
  public imgPath:string;
  public ingredients: Ingredient[];

  constructor(name:string, desc:string, imgP:string, ingredients:Ingredient[] = []){
    this.name=name;
    this.description= desc;
    this.imgPath = imgP;
    this.ingredients = ingredients;
  }
}

