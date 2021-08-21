import axios from 'axios';

const baseConfig = {
    baseURL: 'http://jsonplaceholder.typicode.com/',
    Headers: {
        Authorization: 'Bearer {token}'
    }
}

export const axiosInstance = axios.create(baseConfig);