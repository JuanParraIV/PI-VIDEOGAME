const {Router} =require ("express");
const {
    getAllVideoGames
} =require ('../controllers/videogames/videogames.controllers.js');

const router = Router();  //Instanciar un nuevo router



/* [ ] GET /videogames:
Obtener un listado de los videojuegos
Debe devolver solo los datos necesarios para la ruta principal */
//router.get("/videogames", getAllVideoGames);

/* [ ] GET /videogames?name="...":
Obtener un listado de las primeros 15 videojuegos que contengan la palabra ingresada como query parameter */
router.get("/", getAllVideoGames);


module.exports = router;