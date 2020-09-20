import { API_KEY } from '../api'

export const constructQuery = (query) => new URLSearchParams({
    q:query,
    units: 'metric',
    APPID: API_KEY
}).toString();
