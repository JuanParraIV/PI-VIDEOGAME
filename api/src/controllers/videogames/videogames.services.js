const axios = require("axios");
const { Videogame, Genres } = require("../../db.js");
const { ENV } = require("../../configs/config.js");
const { Op } = require("sequelize");


const AllVideoGamesByName= async (name)=>{

const getFromApiByName = async (name) => {
  try {
    const videogame = await axios.get(
      `https://api.rawg.io/api/games?search=${name}&key=${ENV.apikey}`
    );
    const filteredGames = videogame.data.results.map((game) => {
      return {
        id: game.id,
        name: game.name,
        description: game.description,
        image: game.background_image,
        released: game.released,
        rating: game.rating,
        platforms: Array.isArray(game.platforms)?game.platforms.map(p => p.platform.name):"Unspecified platform",
        genres: game.genres.map((genre) => genre.name),
      };
    });

    return filteredGames;

  } catch (error) {
    return null;
  }
};
const getFromDbByName = async (name) => {
  try {
    const dbquery = await Videogame.findAll({
      where: {
        name: {
          [Op.iLike]: `%${name}%`,
        },
      },
      include: {
        model: Genres,
        attributes: ["name"],
        through: {
          attributes: [],
        },
      },
    });
    return dbquery;
  } catch (error) {
    return null;
  }
};

  const resultFromApiByName=await getFromApiByName(name)
    const resultFromDBByName =await getFromDbByName(name);
    const allVideoGamesByName = [...resultFromApiByName, ...resultFromDBByName];
    return allVideoGamesByName;
}
//
const AllVideoGames = async () => {

const getAllFromApi = async () => {
  let DataFromApi= [];
    for (let i = 1; i <= 5; i++) {
      DataFromApi.push(axios.get(
        `https://api.rawg.io/api/games?page=${i}&key=${ENV.apikey}`
      ));
    }
   return Promise.all(DataFromApi).then((res) => {
     let ApiPagesData = [];
     let result = [];
     res.forEach((page) => {
        ApiPagesData.push(page.data.results);
      });

      ApiPagesData.map(page => {
        page.forEach(game=>{
          result.push({
          id: game.id,
          name: game.name,
          description: game.description,
          image: game.background_image,
          released: game.released,
          rating: game.rating,
          platforms: game.platforms.map((p) => p.platform.name),
          genres: game.genres.map((genre) => genre.name),
        });
        })
      });
      return result;
    });
  
};
const getAllFromDb = async () => {
  try {
    const dbquery = await Videogame.findAll({
      include: {
        model: Genres,
        attributes: ["name"],
        through: {
          attributes: [],
        },
      },
    });
    return dbquery;
  } catch (error) {
    return null;
  }
};


    const resultFromDB = await getAllFromDb();
    const resultFromApi = await getAllFromApi();
    const allVideoGames = [...resultFromApi, ...resultFromDB];
    return allVideoGames;
};




module.exports = {
  AllVideoGamesByName,
  AllVideoGames
};