import axios from 'axios'

const api = axios.create({
    baseURL: 'http://localhost/urbanflow/backend/?route='
})

export default api