export interface IProduct{
    _id: string
    title: string
    slug: string
    type: string
    price: number
    description?: string
    image:string[]
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

