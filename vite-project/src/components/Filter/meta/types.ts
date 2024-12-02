export interface ITopSelling {
    _id: string,
    name: string,
    description: string,
    price: number,
    stock: number,
    rating: number,
    ratingCount: number,
    images: string[],
    category: {
        _id: string,
        name: string
    }

}