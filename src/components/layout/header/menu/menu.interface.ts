import {TypeMaterialIconName} from "@/src/shared/types/icons.types";


export interface IMenuItem {
    icon: TypeMaterialIconName
    link: string
}

export interface IMenu {
    title: string
    items: IMenuItem[]
}
