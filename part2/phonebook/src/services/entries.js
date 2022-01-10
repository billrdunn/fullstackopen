import axios from 'axios'
const baseUrl = '/api/entries'

const getAll = () => {
    const request = axios.get(baseUrl)
    return request.then(response => response.data)
}

const create = (newObject) => {
    // 'post' sends an object to the server
    const request = axios.post(baseUrl, newObject)
    return request.then(response => response.data)
}

const update = (id, newObject) => {
    // 'put' replaces the entire note
    // 'patch' changes some of a note's properties
    const request = axios.put(`${baseUrl}/${id}`, newObject)
    return request.then(response => response.data)
}

const remove = (id) => {
    const request = axios.delete(`${baseUrl}/${id}`)
    return request.then(response => response.data)
}

export default {getAll, create, update, remove}