const imageSearchRouter=require('express').Router();
// const axios=require('axios');
const {getSearch} =require('../controller/imageSearchController');

imageSearchRouter.get('/:query',getSearch);

module.exports=imageSearchRouter;