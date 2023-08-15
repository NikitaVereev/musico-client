import { ChangeEvent, useCallback, useMemo, useState } from 'react'
import { useMutation } from '@tanstack/react-query'

import { FileService } from '@/src/services/file.service'

import { toastError } from '@/src/components/utils/toast-error'

type TypeUpload = (
    onChange: (...event: any[]) => void,
    folder?: string
) => {
    uploadImage: (e: ChangeEvent<HTMLInputElement>) => Promise<void>
    isLoading: boolean
    uploadReview: (e: ChangeEvent<HTMLInputElement>) => Promise<void>
}

export const useUpload: TypeUpload = (onChange, id) => {
    const [isLoading, setIsLoading] = useState(false)

    const { mutateAsync } = useMutation(

        (data: FormData) => FileService.upload(data, id),
        {
            onSuccess: ({ data }) => {
                onChange(data);

            },
            onError: (error) => {
                toastError(error, 'Upload file');
            },
        }
    );

    const uploadImage = useCallback(
        async (e: ChangeEvent<HTMLInputElement>) => {
            setIsLoading(true)

            const files = e.target.files
            if (!files?.length) return
            const formData = new FormData()
            formData.append('file', files[0])

            await mutateAsync(formData)

            setTimeout(() => {
                setIsLoading(false)
            }, 1000)
        },
        [mutateAsync]
    )

    const { mutateAsync: mutateAsyncReview } = useMutation(

        (data: FormData) => FileService.uploadReviewFile(data, id),
        {
            onSuccess: ({ data }) => {
                onChange(data);

            },
            onError: (error) => {
                toastError(error, 'Upload file');
            },
        }
    );

    const uploadReview = useCallback(
        async (e: ChangeEvent<HTMLInputElement>) => {
            setIsLoading(true)

            const files = e.target.files
            if (!files?.length) return
            const formData = new FormData()
            formData.append('file', files[0])

            await mutateAsyncReview(formData)

            setTimeout(() => {
                setIsLoading(false)
            }, 1000)
        },
        [mutateAsyncReview]
    )

    return useMemo(() => ({ uploadImage, isLoading, uploadReview }), [uploadImage, isLoading, uploadReview])
}
