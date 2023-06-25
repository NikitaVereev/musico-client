import {FaMusic} from "react-icons/fa";
import {IconType} from "react-icons";
import {MdExplore} from "react-icons/md";
import {TypeMaterialIconName} from "@/src/shared/types/icons.types";

interface IBanner{
    title: string
    icon: TypeMaterialIconName
}

export const banerData: IBanner[] = [
    {
        title: 'Бесплатный расчет сметы',
        icon: 'MdExplore'
    },
    {
        title: 'Возврат товара',
        icon: 'MdExplore'
    },
    {
        title: 'Оптимизация расходов',
        icon: 'MdExplore'
    },
    {
        title: 'Любая форма оплаты',
        icon: 'MdExplore'
    }
]