export interface Product {
    id?: number;
    name: string;
    price: number;
    value: number;
    unit: string;
    created: string;
    supermarket_id: number;
    category_id: number;
  }

export interface ProductResponse {
    status_code: number;
    message: string;
    data: Product[];
  }