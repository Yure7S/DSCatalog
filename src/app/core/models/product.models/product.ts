import { Category } from "../category.models/category"

export class Product {
    name?: string
    price?: string
    date?: string
    description?: string
    imgUrl?: string
    categories?: Category[]
}