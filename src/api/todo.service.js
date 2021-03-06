import TodoDto from "./todoDto";
import adapter from 'axios/lib/adapters/http';
const axios = require('axios');

class TodoService {

    constructor(baseUrl, port){
        this.baseUrl = baseUrl;
        this.port = port;
    }

     createTodo(todoBody) {
        return axios.request({
            method: 'POST',
            url: `/todo`,
            baseURL: `http://localhost:4000`,
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json; charset=utf-8'
            },
            data: todoBody
        }, adapter);
    };

    getTodo(hero) {
        return axios.request({
            method: 'get',
            url: `/todo`,
            baseURL: `http://localhost:4000`,
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json; charset=utf-8'
            },
        }, adapter);
    };

}

export default TodoService;
