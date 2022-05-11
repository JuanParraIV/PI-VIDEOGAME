const {Router} =require ("express");
const {
    getAllGenres,
} =require ('../controllers/genres/genres.controllers.js');

const router = Router();  //Instanciar un nuevo router

/* [ ] GET /genres:
Obtener todos los tipos de géneros de videojuegos posibles
En una primera instancia deberán traerlos desde rawg y guardarlos en su propia base de datos y luego ya utilizarlos  desde allí */

router.get("/", getAllGenres);

module.exports = router;