

import { INavItem } from './admin-navigation.interface'
import {getAdminHomeUrl, getAdminUrl} from "@/src/config/url.config";

export const navItems: INavItem[] = [
	{
		title: 'Статистика',
		link: getAdminHomeUrl(),
	},
	{
		title: 'Пользователи',
		link: getAdminUrl('users'),
	},
	{
		title: 'Заказы',
		link: getAdminUrl('orders'),
	},
	{
		title: 'Продукты',
		link: getAdminUrl('product-list'),
	},

]
