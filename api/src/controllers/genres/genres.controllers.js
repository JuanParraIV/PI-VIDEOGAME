const axios = require("axios");
const { Genres } = require("../../db.js");
const { ENV } = require("../../configs/config.js");

//GET https://api.rawg.io/api/genres*/

//controlador para traer todos los generos
const getAllGenres = async (req, res, next) => {
  //async await
  try {
    // para traer todos los generos desde la api
    const getAllGenresFromRawg = await axios.get(
      `https://api.rawg.io/api/genres?key=${ENV.apikey}`
    );
    const resultQueryFromDb = await Genres.findAll();
    if (resultQueryFromDb.length === 0) {
      const genres = getAllGenresFromRawg.data.results;
      const genresArray = genres.map((genre) => {
        return {
          id: genre.id,
          name: genre.name,
        };
      });
      await Genres.bulkCreate(genresArray);
      res.status(200).json(genresArray);
    } else {
      res.status(200).json(resultQueryFromDb);
    }
  } catch (error) {
    next(error);
  }
};

module.exports = {
  getAllGenres,
};
