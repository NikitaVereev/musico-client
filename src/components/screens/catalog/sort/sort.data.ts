import {ISelectItem} from "@/src/components/ui/select/select.interface";
import {EnumProductSort} from "@/src/interfaces/product.interface";

export const SORT_SELECT_DATA: ISelectItem<EnumProductSort>[] = [
    {
        key: EnumProductSort.HIGH_PRICE,
        label: 'По возрастанию'
    },
    {
        key: EnumProductSort.LOW_PRICE,
        label: 'По убыванию'
    },
    // {
    //     key: EnumProductSort.NEWEST,
    //     label: 'Новые'
    // },
    // {
    //     key: EnumProductSort.POPULAR,
    //     label: 'Популярные'
    // }
]