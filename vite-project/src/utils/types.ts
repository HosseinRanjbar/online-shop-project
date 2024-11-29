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