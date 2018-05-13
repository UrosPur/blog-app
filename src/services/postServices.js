import axios from 'axios'


export default class postServices {

    constructor() {
        axios.defaults.baseURL='http://localhost:3000/api/'

    }

    getAll() {

        return axios.get('posts');

    }

    get(id) {
        return axios.get(`posts/${id}`)

    }

    add(value){


        // console.log(value)

        return axios.post('posts',value)
    }

    edit (post) {
        // console.log(post)
        return axios.put(`posts/${post.id}`, post)
    }


}

export const postServ = new postServices();

