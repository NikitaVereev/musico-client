import { FC } from 'react'

import Button from '@/src/components/ui/button/Button'

import styles from './AdminCreateButton.module.scss'

const AdminCreateButton: FC<{ onClick: () => void }> = ({ onClick }) => {
	return <Button onClick={onClick}>Создать нового</Button>
}

export default AdminCreateButton
