export interface InputCreateProductDto {
  type: ProductType;
  name: string;
  price: number;
}

export type ProductType = "a" | "b";

export interface OutputCreateProductDto {
  id: string;
  name: string;
  price: number;
}
