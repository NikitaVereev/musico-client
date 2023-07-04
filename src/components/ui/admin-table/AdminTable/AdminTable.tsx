import { FC } from 'react'

import SkeletonLoader from '../../heading/SkeletonLoader'

import AdminHeaderItem from './AdminHeaderItem'
import styles from './AdminTable.module.scss'
import {useRouter} from 'next/router'
import AdminTableHeader from './AdminTableHeader'
import { ITableItem } from './admin-table.interface'

interface IAdminTable {
	tableItems: ITableItem[]
	isLoading: boolean
	headerItems: string[]
	removeHandler: (_id: string) => void
}

const AdminTable: FC<IAdminTable> = ({
	headerItems,
	isLoading,
	removeHandler,
	tableItems,
}) => {
	const {pathname} = useRouter()
	console.log(tableItems)
	return (
		<div className='animate-scaleIn'>
			<AdminTableHeader headerItems={headerItems}
							  //@ts-ignore
							  isLoading={isLoading} />
			{isLoading ? (
				<SkeletonLoader count={1} height={48} className="mt-4" />
			) : pathname === '/manage/order-list' && tableItems.items.length ? (
				tableItems.items.map((tableItems) => (
					<AdminHeaderItem key={tableItems.id} tableItem={tableItems} removeHandler={() => {}} />
				))
			) : tableItems.length ? (
				tableItems.map((tableItems) => (
					<AdminHeaderItem
						key={tableItems.id}
						removeHandler={() => removeHandler(tableItems.id)}
						tableItem={tableItems}
					/>
				))
			) : (
				<div className={styles.notFound}>Элементов нет</div>
			)}
		</div>
	)
}

export default AdminTable
