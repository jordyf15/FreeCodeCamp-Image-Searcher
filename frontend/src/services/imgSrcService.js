import axios from 'axios';
const baseUrl='http://localhost:3001';

export const imageSearch=async(query,offset)=>{
    return await axios.get(`${baseUrl}/api/imagesearch/${query}?offset=${offset}`);
}