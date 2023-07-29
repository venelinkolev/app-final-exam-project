export interface IRecipe {
  _id: string;
  recipeName: string;
  imageUrl: string;
  ingredients: string;
  prepTime: number;
  cookTime: number;
  totalTime: number;
  servings: number;
  userId: string;
}
