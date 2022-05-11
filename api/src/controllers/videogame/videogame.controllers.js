const axios = require("axios");
const { Videogame, Genres } = require("../../db.js");
const { ENV } = require("../../configs/config.js");
const {
  AllVideoGames,
} = require("./videogame.services.js");

const getAllVideoGamesById = async (req, res, next) => {
  //GET https://api.rawg.io/api/games/{id} */
  //Obtener el detalle de un videojuego en particular

  const { idVideogame } = req.params;

  try {
    const videogame = await AllVideoGames(idVideogame);
    videogame !== null
    ? res.json(videogame)
    : res.json({
          message: "Videojuego no encontrado",
        });
  } catch (error) {
    next(error);
  }
};

const createVideoGame = async (req, res, next) => {
 
  try {
    const { name, description, released, rating, platforms, image, genres } =
      req.body;

    
    if (name && description && platforms) {
      let getGenresFromDb = await Genres.findAll({
        where: {
          name: genres,
        },
      });
      const [finded, created] = await Videogame.findOrCreate({
        //findOrCreate: busca un registro en la base de datos y si no existe lo crea.
        //[finded]: el registro encontrado,
        //[created]: true si se creó el registro, false si ya existía
        where: {
          name,
        },
        defaults: {
          description,
          released,
          rating,
          platforms,
          image,
        },
        include: [
          {
            model: Genres,
            where: {
              name: genres,
            },
          },
        ],
      });
      finded.addGenres(getGenresFromDb);

      created
        ? res.json({
            message: "Videojuego creado correctamente",
            id: finded.id,
          })
        : res.json({
            message: "Videojuego ya existe",
          });
    } else {
      res.json({
        message: "Faltan datos",
      });
    }
  } catch (error) {
    next(error);
  }
};

module.exports = {
  createVideoGame,
  getAllVideoGamesById,
};
