import axios from "axios";

const instance = axios.create({
    baseURL:'https://backend-e-commerce-production.up.railway.app/api/v1',
    headers:{
       "Content-type":"application/json"
    },
    timeout:10000
})
export default instance