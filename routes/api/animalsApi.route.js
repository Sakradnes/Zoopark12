const router = require('express').Router();
const { Animal, ImgAnimals } = require('../../db/models');


router.post('/', async (req,res)=>{
const newAnimal = await Animal.create({
    
})
})
module.exports = router;
