export interface Supermarket {
    id: number;
    name: string;
}

export interface SupermarketResponse {
    status_code: number;
    message: string;
    data: Supermarket[];
}