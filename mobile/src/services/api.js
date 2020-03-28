import axios from 'axios';

const api = axios.create({
    baseURL: 'https://f58e0ef3.ngrok.io/api'
})

export default api;