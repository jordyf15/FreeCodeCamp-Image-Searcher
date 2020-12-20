import axios from 'axios';
const baseUrl='http://localhost:3001';

export const historySearch=async()=>{
   return await axios.get(`${baseUrl}/api/latest/imagesearch`);
}