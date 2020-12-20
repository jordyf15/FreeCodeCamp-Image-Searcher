require('dotenv').config();
const mongoose=require('mongoose');

const db = mongoose.connect(process.env.DATABASE_URI,{
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true,
    useFindAndModify: false
})

process.on('SIGINT', () => {
    mongoose.disconnect().then(() => {
        console.log('disconnecting from server')
        process.exit();
    });
});

module.exports=db;