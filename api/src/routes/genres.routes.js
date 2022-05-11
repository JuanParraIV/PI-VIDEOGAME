const {Router} =require ("express");
const {
    getAllGenres,
} =require ('../controllers/genres/genres.controllers.js');
/* const {Genres}= require('../db.js'); */

const router = Router();  //Instanciar un nuevo router

router.get("/", getAllGenres);

/* router.post('/genres', async (req,res)=>{
    const {name} = req.body;

    if(name){
        const [finded,created]=  await Genres.findOrCreate({
            where:{
                name,
            }
        })

    if(created){
        res.json(finded);
    }else{
        res.json({msg:'Genre already exist'})
    }
    }

}) */


module.exports = router;