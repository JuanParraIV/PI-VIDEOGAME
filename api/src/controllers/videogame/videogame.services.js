const axios = require("axios");
const { Videogame, Genres } = require("../../db.js");
const { ENV } = require("../../configs/config.js");

// videogame by id functions
const getFromDbById = async (idVideogame) => {
  try {
    const dbQuery = await Videogame.findByPk(idVideogame, {
      include: {
        model: Genres,
      },
    });
    return dbQuery;
  } catch (error) {
    return null;
  }
};
const apiQuery = async (idVideogame) => {
  try {
    const videogame = await axios.get(
      `https://api.rawg.io/api/games/${idVideogame}?key=${ENV.apikey}`
    );
    let gameinfo = {
      id: videogame.data.id,
      name: videogame.data.name,
      description: videogame.data.description,
      image: videogame.data.background_image,
      released: videogame.data.released,
      rating: videogame.data.rating,
      platforms: videogame.data.platforms.map((p) => p.platform.name),
      genres: videogame.data.genres.map((genre) => genre.name),
    };
    console.log(gameinfo);
    return gameinfo;
  } catch (error) {
    return null;
  }
};
const AllVideoGames = (idVideogame) => {
  const result = isNaN(idVideogame)
    ? getFromDbById(idVideogame)
    : apiQuery(idVideogame);
  return result;
};



//videogame create functions

module.exports = {
  getFromDbById,
  apiQuery,
  AllVideoGames,
};
