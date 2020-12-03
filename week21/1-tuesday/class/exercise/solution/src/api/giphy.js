import axios from 'axios';

const API_KEY = "Rm3tsaKZrzUUdNfkud67rUrZE7xhq4fR";

export default axios.create({
    baseURL: "https://api.giphy.com/v1/",
    params: {api_key: API_KEY}  
})

