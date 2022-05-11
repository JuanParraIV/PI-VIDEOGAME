const {Router} =require ("express");
const {
    createVideoGame, getAllVideoGamesById
} =require ('../controllers/videogame/videogame.controllers.js');

const router = Router();  //Instanciar un nuevo router

/* [ ] GET /videogame/{idVideogame}:
Obtener el detalle de un videojuego en particular
Debe traer solo los datos pedidos en la ruta de detalle de videojuego
Incluir los géneros asociados */
router.get("/:idVideogame", getAllVideoGamesById);

/* [ ] POST /videogame:
Recibe los datos recolectados desde el formulario controlado de la ruta de creación de videojuego por body
Crea un videojuego en la base de datos */
router.post('/',createVideoGame);

module.exports = router;