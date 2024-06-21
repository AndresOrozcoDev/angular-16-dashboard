export interface Category {
    id: number;
    name: string;
}

export interface CategoryResponse {
    status_code: number;
    message: string;
    data: Category[];
}