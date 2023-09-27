import axios from "axios"

export const api = axios.create({
    baseURL: 'https://strangers-things.herokuapp.com/api/2302-ACC-ET-WEB-PT-D'
})

export const getPosts = async () => {
    const response = await api.get('/posts')
     return response.data.data.posts
    console.log(response.data.data.posts)
}