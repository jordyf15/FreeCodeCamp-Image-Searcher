const Schema = require('mongoose').Schema;
const mongoose=require('mongoose');

const srcHistorySchema=new Schema({
    query: String,
    time: Date
});

module.exports=mongoose.model('srcHistory',srcHistorySchema);