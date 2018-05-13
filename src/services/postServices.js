import axios from 'axios'

export default class postServices {

    constructor() {

        axios.defaults.baseURL='http://localhost:3000/api/'

    }

    getAll() {


        return axios.get('posts');

    }


}


export const postServ = new postServices();

