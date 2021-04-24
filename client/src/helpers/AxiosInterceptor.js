import axios from "axios";

const apiUrl = 'http://localhost:1905/coffee/';
const axiosAuth = axios.create({
    baseURL: apiUrl,
    headers: { 
        'Access-Control-Allow-Origin': '*',
        'Content-Type': 'application/json'
    }
});

export default axiosAuth;