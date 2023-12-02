import { errorCatch } from '@/src/api/api.helpers'
import { toastr } from 'react-redux-toastr'

export const toastError = (error: any, title?: string) => {
    console.log(error, title)
    const message = errorCatch(error)
    toastr.error(title || 'Error request', message)
    throw message
}
