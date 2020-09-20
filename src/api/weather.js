import { baseUrl } from './settings'
import { constructQuery, isEmpty } from '../utils'

export const fetchWeather = (query) => {
    const url = isEmpty(query)
        ? baseUrl
        : baseUrl + '?' + constructQuery(query)

    return fetch(url)
}
