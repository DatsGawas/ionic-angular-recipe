import { Injectable } from '@angular/core';
import { Recipe } from './recipe.model';

@Injectable({
  providedIn: 'root'
})
export class RecipesService {

 private recipes: Recipe[] = [
    {
      id: 'r1',
      title: 'Bacon-Wrapped Chicken',
      imageUrl: 'assets/images/r1.jpg',
      ingredients : ['Chicken', 'Pork Meat']
    },
    {
      id: 'r2',
      title: 'Jackfruit Chilli',
      imageUrl: 'assets/images/r2.jpg',
      ingredients : ['Jackfruit', 'Salad']
    }
  ];
  constructor() { }

  getAllRecipes() {
    return [...this.recipes];
  }

  getRecipe(recipeId: string) {
    return {
      ...this.recipes.find(recipe => {
      return recipe.id === recipeId;
    })
  };
  }

  deleteRecipe(recipeId: string) {
    this.recipes = this.recipes.filter((recipe: Recipe) => {
      return recipe.id !== recipeId;
    });
  }

}
