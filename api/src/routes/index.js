const { Router } = require('express');
// Importar todos los routers;
// Ejemplo: const authRouter = require('./auth.js');
const videogamesRoutes = require('./videogames.routes.js')
const videogameRoutes = require('./videogame.routes.js')
const genresRoutes =require ('./genres.routes.js');
const router = Router();

// Configurar los routers
// Ejemplo: router.use('/auth', authRouter);

router.use('/videogame',videogameRoutes)
router.use('/videogames',videogamesRoutes)
router.use('/genres',genresRoutes)

module.exports = router;
