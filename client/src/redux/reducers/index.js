import {
  GET_VIDEOGAMES,
  SEARCH_VIDEO_GAME_BY_NAME,
  ADD_VIDEO_GAME,
  GET_GENRES,
  GET_DETAIL,
  FILTER_BY_GENRE,
  FILTER_CREATED,
  ORDER_BY,
} from "../actions";
;

const initialState = {
  videogames: [],
  allVideogames: [],
  filteredGames: [],
  genres: [],
  detailedVideogame: [],
};

export const rootReducer = (state = initialState, { type, payload }) => {
  // payload is the data that comes from the action
  switch (type) {
    case GET_VIDEOGAMES:
      return {
        ...state,
        videogames: payload,
        allVideogames: payload,
      };
    case GET_GENRES:
      return {
        ...state,
        genres: payload,
      };
    case SEARCH_VIDEO_GAME_BY_NAME:
      return {
        ...state,
        videogames: payload,
      };
    case ADD_VIDEO_GAME:
      return {
        ...state,
      };
    case GET_DETAIL:
      return {
        ...state,
        detailedVideogame: payload,
      };
    case FILTER_BY_GENRE:
      const allVideogames = state.allVideogames;
      const genresFiltered =
        payload === "All"
          ? allVideogames
          : allVideogames?.filter((game) =>
              game.genres.name
                ? game.genres.find((genre) => genre.name === payload)
                : game.genres.includes(payload)
            );
      return {
        ...state,
        videogames: genresFiltered,
      };
    case FILTER_CREATED:
      const allVideogamesCreated = state.allVideogames;
      const createdFilter =
        payload === "Created"
          ? allVideogamesCreated?.filter((game) => game.createdInDB)
          : allVideogamesCreated?.filter((game) => !game.createdInDB);
      return {
        ...state,
        videogames: payload === "All" ? allVideogamesCreated : createdFilter,
      };
    case ORDER_BY:
      let loadedVideogames = state.videogames;

      if (loadedVideogames.length === 0) loadedVideogames = state.allVideogames;

      let sortedBy = "";

      if (payload === "All") sortedBy = state.allVideogames;

      if (payload === "Asc_name")
        sortedBy = loadedVideogames.sort((a, b) => {
          if (a.name > b.name) {
            return 1;
          }
          if (a.name < b.name) {
            return -1;
          }
          return 0;
        });

      if (payload === "Desc_name")
        sortedBy = loadedVideogames.sort((a, b) => {
          if (a.name < b.name) {
          return 1;
          }
          if (a.name > b.name) {
          return -1;
          }
          return 0;
    });

      if (payload === "Asc_rating")
        sortedBy = loadedVideogames.sort((a, b) => {
          if (a.rating > b.rating) {
            return 1;
          }
          if (a.rating < b.rating) {
            return -1;
          }
          return 0;
        });

      if (payload === "Desc_rating")
        sortedBy = loadedVideogames.sort((a, b) => {
          if (a.rating < b.rating) {
          return 1;
          }
          if (a.rating > b.rating) {
          return -1;
          }
          return 0;
    });

      return {
        ...state,
        videogames: sortedBy,

      };
    default:
      return state;
  }
};

export default rootReducer;
