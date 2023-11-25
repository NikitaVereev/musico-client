import Acoustic from '@/src/assets/acustic.jpg'
import Ukulele from '@/src/assets/ukulele.jpg'
import Classic from '@/src/assets/classic.jpg'
import Drum from '@/src/assets/drum.jpg'
import Strings from '@/src/assets/strings.jpg'
import Electro from '@/src/assets/electro.jpg'
import Acses from '@/src/assets/acsess.jpg'
import Klava from '@/src/assets/klava.jpg'
import {IList} from "@/src/components/screens/catalog/catalog-list.interface";

export const catalogList: IList[] = [
    {
        image: Acoustic,
        title: 'Акустические гитары',
        link: 'acoustic-guitar'
    },
    {
        image: Ukulele,
        title: 'Укулеле',
        link: 'ukulele'
    },
    {
        image: Classic,
        title: 'Классические гитары',
        link: 'classic-guitar'
    },
    // {
    //     image: Drum,
    //     title: 'Аксессуары для ударных',
    //     link: 'accessories-drum'
    // }
    // ,
    // {
    //     image: Strings,
    //     title: 'Струны',
    //     link: 'strings'
    // },
    {
        image: Electro,
        title: 'Электрогитары',
        link: 'electric-guitar'
    },
    // {
    //     image: Acses,
    //     title: 'Аксессуары для гитар',
    //     link: 'accessories-guitar'
    // },
    {
        image: Klava,
        title: 'Клавишные',
        link: 'klava'
    }
]

export const guitars = [
    {
        image: Acoustic,
        title: 'Акустические гитары',
        link: '/acoustic-guitar'
    },
    {
        image: Classic,
        title: 'Классические гитары',
        link: '/classic-guitar'
    },
    {
        image: Electro,
        title: 'Электрогитары',
        link: '/electric-guitar'
    },
    {
        image: Ukulele,
        title: 'Укулеле',
        link: '/ukulele'
    },
    {
        image: Strings,
        title: 'Струны',
        link: '/strings'
    },
    {
        image: Acses,
        title: 'Аксессуары для гитар',
        link: '/accessories-guitar'
    },
]

export const drum = [
    {
        image: Drum,
        title: 'Аксессуары для ударных',
        link: '/accessories-drum'
    }
]

export const klavish = [
    {
        image: Klava,
        title: 'Клавишные',
        link: '/klava'
    }
]