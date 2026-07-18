export interface ProductSaveModel {
  categoryId: number;
  productName: string;
  description?: string | null;
  tooltip?: string | null;
  price: number;
  image?: string | null;
  isFeatured: boolean;
  ingredientNames: string[];
  allergenIds: number[];
}
