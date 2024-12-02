export interface IProduct {
  name?: string;
  price?: number;
  category?: {
    name?: string;
    _id?: string
  };
  description?: string;
  images: string[];
  stock?: number;
  _id?: string;
}

export interface ICategories {
  name: string
  productCount: number
  _id: string
}

export type IColor = "primary" | "red" | "warning"