import { Allergen } from './allergenModel';

export interface Product {
  productId: number;
  categoryId: number;
  productName: string;
  description?: string | null;
  tooltip?: string | null;
  price: number;
  image?: string | null;
  isFeatured: boolean;
  ingredientNames: string[];
  allergens: Allergen[];
}