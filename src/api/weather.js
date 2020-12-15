import { baseUrl } from './settings'
import { constructQuery, isEmpty } from '../utils'

export const fetchWeather = (query) => {
    const url = isEmpty(query)
        ? baseUrl
        : baseUrl + '?' + constructQuery(query)

    return fetch(url)
        .then(response => response.json())
        .then(json => {
            if (json.cod && json.cod === '404') {
                throw new Error(json.message)
            }
        })
}
