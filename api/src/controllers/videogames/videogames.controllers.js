const axios = require("axios");
const { Videogame, Genres } = require("../../db.js");
const { ENV } = require("../../configs/config.js");
const {AllVideoGamesByName,AllVideoGames} = require("./videogames.services.js");
// Para traer todos los videojuegos de la API
const getAllVideoGames = async (req, res, next) => {
    const { name } = req.query;

    
    try {
     (name) ?
        res.json(await AllVideoGamesByName(name)) :
        res.json(await AllVideoGames());
    } catch (error) {
      next(error);
    }
  };



module.exports = {
  getAllVideoGames
};
