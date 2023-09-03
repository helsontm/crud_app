const catchError = require('../utils/catchError');
const Crud = require('../models/Crud');

const getAll = catchError(async(req, res) => {
    // Operaciones...
    const crud =await Crud.findAll();
    return res.json(/* valor a retornar */crud)
});

const create = catchError(async(req, res) => {

   const {first_name,last_name,email,password,birthday}=req.body;

    const crudBody={
        first_name,
        last_name,
        email,
        password,
        birthday
    }
   const crud=await Crud.create(crudBody);
    return res.status(201).json(crud)
});

const getOne = catchError(async(req, res) => {
   const {id}=req.params;
   const crudOne =await Crud.findByPk(id);
   return res.status(201).json(crudOne)

});

const remove = catchError(async(req, res) => {
    const {id}=req.params;
    const cruddel =await Crud.destroy({where: {id}});
    return res.sendStatus(204);
});

const change = catchError(async(req, res) => {
    const {id} = req.params;
    const {first_name,last_name,email,password,birthday}=req.body;
    const cruUpdate=await Crud.update({
        first_name,last_name,email,password,birthday 
       },{where:{id}, returning:true} )
    return res.status(201).json(cruUpdate)
})
    


module.exports = {
    getAll,
    create, 
    getOne,
    remove,
    change
}