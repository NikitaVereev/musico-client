export interface IProduct{
    checked: boolean;
    id: string
    title: string
    slug: string
    company: string
    subType: string
    price: number
    description?: string
    fileUrl:string
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

