import axios from 'axios';

const API_KEY = __REPLACE ME WITH YOUR API KEY___;

export default axios.create({
    baseURL: "https://api.giphy.com/v1/",
    params: {api_key: API_KEY}  
})

