export interface IProduct {
    id: number
    title: string
}

export interface ICreateProduct extends Omit<IProduct, 'id'> {
    
}