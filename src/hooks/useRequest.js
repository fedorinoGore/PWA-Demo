import useSwr from 'swr'
import { baseUrl } from '../api/settings'
import { constructQuery, isEmpty } from '../utils'


export const useRequest = (path, query) => {
    if (!path) {
        throw new Error('Path is required')
    }

    const url = isEmpty(query)
        ? baseUrl + path
        : baseUrl + path + '?' + constructQuery(query)

    const { data, error } = useSwr(url)

    return { data, error }
}
