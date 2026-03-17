import axios from "axios";
export const getproducts = async(endpoint)=>{ 
    
    const response= await axios.get(`https://dummyjson.com/${endpoint}/`) 
    return response;
}