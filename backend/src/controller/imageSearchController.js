const axios = require('axios');
const srcHistory=require('../models/searchHistory');

const getSearch=async(req,res)=>{
    try{
        const query=req.params.query;
        const offset=req.query.offset?req.query.offset:10;
        const {data}=await axios.get(`https://www.googleapis.com/customsearch/v1?key=AIzaSyBNtJ2P71GRIeFTT8bK5qLNzR-0zkYOhrc&cx=3cc76ababac009e0a&searchType=image&num=${offset}&q=${query}`)
        const result=data.items.map((d)=>({imageUrl:d.link,altText:d.snippet,pageUrl: d.image.contextLink}))
        const newSrcHistory=new srcHistory({
           query,
           time: new Date() 
        });
        await newSrcHistory.save();
        res.json(result);
    }catch(error){
        console.log('error',error);
        res.json({message:'search failed',error});
    }
 
};

module.exports={
    getSearch
}