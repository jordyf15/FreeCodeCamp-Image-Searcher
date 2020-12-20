const historyRouter=require('express').Router();
const {getHistory}=require('../controller/historyController');

historyRouter.get('/', getHistory);

module.exports=historyRouter;