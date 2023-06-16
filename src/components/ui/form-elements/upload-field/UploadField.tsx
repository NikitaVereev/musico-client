import cn from 'classnames'
import Image from 'next/image'
import { FC } from 'react'

import SkeletonLoader from '../../heading/SkeletonLoader'
import { IUploadField } from '../form.interface'
import styles from '../Form.module.scss'

import { useUpload } from './useUpload'

const UploadField: FC<IUploadField> = ({
                                           onChange,
                                           placeholder,
                                           error,
                                           folder,
                                           isNoImage,
                                           style,
                                           value,
                                       }) => {
    const { isLoading, uploadImage } = useUpload(onChange, folder)
console.log(value, folder, onChange)
    return (
        <div className={cn(styles.field, styles.uploadField)} style={style}>
            <div className={styles.uploadFlex}>
                <label>
                    <span>{placeholder}</span>
                    <input type="file" onChange={uploadImage} />
                    {error && <div className={styles.error}>{error.message}</div>}
                </label>

                {!isNoImage && (
                    <div className={styles.uploadImageContainer}>
                        {isLoading ? (
                            <SkeletonLoader count={1} className="w-full h-full" />
                        ) : (
                            value && <Image src={value} alt="" unoptimized layout="fill" />
                        )}{' '}
                    </div>
                )}
            </div>
        </div>
    )
}

export default UploadField
