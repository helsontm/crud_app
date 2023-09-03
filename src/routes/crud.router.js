const { getAll, create, getOne, remove, change } = require('../controllers/crud.controllers');
const express = require('express');

const crudRouter = express.Router();

crudRouter.route("/")
		.get(getAll)
        .post(create);

crudRouter.route("/:id") 
       .get(getOne) 
       .delete(remove)  
       .put(change)    

module.exports = crudRouter;