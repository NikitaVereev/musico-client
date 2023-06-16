import { FC } from 'react'

import SkeletonLoader from '../../heading/SkeletonLoader'

import AdminHeaderItem from './AdminHeaderItem'
import styles from './AdminTable.module.scss'
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
	return (
		<div>
			<AdminTableHeader headerItems={headerItems} />
			{isLoading ? (
				<SkeletonLoader count={1} height={48} className="mt-4" />
			) : tableItems.length ? (
				tableItems.map((tableItems) => (
					<AdminHeaderItem
						key={tableItems._id}
						removeHandler={() => removeHandler(tableItems._id)}
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
