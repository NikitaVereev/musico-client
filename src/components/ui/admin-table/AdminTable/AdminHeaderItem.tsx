import { FC } from 'react'

import AdminActions from './AdminActions/AdminActions'
import styles from './AdminTable.module.scss'
import { IAdminTableItem } from './admin-table.interface'
import {useRouter} from 'next/router'
import Image from "next/image";

const AdminHeaderItem: FC<IAdminTableItem> = ({ tableItem, removeHandler,
												  //@ts-ignore
												  isLoading }) => {
	const {pathname} = useRouter()

	if (isLoading) return <div className="loader">Загрузка</div>
	console.log(tableItem)
	return (
		<>
		{pathname === '/manage/order-list' ? <div className={styles.item}>

				<div>{
					//@ts-ignore
					tableItem.product.title}</div>
				<div>{
					//@ts-ignore
					tableItem.quantity}</div>
				<div>{
					//@ts-ignore
					tableItem.product.price}</div>
				<div>
					<Image src={
						//@ts-ignore
						tableItem.product.fileUrl} width={50} height={50} alt={tableItem.product.title} />
				</div>
		</div> : <div className={styles.item}>
			{tableItem.items.map((value) => (
				<div key={value}>{value}</div>
			))}
			<AdminActions editUrl={tableItem.editUrl} removeHandler={removeHandler}/>
		</div>
}
		</>
	)
}

export default AdminHeaderItem
