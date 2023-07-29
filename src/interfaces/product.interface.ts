export interface IProduct{

    id: string
    title: string
    slug: string
    company: string
    subType: string
    rating: number
    price: number
    description?: string
    fileUrl: [
        {
            id: string
            url: string
        }
    ]
    article: string
    features?: {
        grip: string,
        case: string
        vulture: string
        makeup: string
        lads: number
        bezel: number
        quillMechanics: string
        soundPickups: string
        controls: string
        finish: string
        color: string[]
        country: string
    }
}

export interface ICatalogPage{
    products: IProduct[]
    heading: string
    isLoading: boolean
}

export type TypeProductDataFilters = {
    sort?: string
    searchTerm?: string
    page?: string | number
    perPage?: string | number
    ratings: string
    minPrice?: string
    maxPrice?: string
    categoryId?: string
}

export enum EnumProductSort {
    HIGH_PRICE = 'По убыванию',
    LOW_PRICE = 'По возрастанию',
    NEWEST = 'Новые',
    POPULAR = 'Популярные'
}


