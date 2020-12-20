const srcHistory=require("../models/searchHistory");

const getHistory=async(req,res)=>{
    try{
        const fetchRes=await srcHistory.find().limit(20).sort({'time':-1});
        const result=fetchRes.map(r=>({query: r.query,time:r.time}))
        res.json(result);
    }
    catch(error){
        console.log('error',error);
        res.json({message: 'get latest search failed',error});
    }
};

module.exports={
    getHistory
}