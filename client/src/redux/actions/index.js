import axios from "axios";
// Aca deben declarar las variables donde tengan el action types.
// Esten atentos a que los nombres de las variables coincidan.

//actions creators
export const GET_VIDEOGAMES = "GET_VIDEOGAMES";
export const SEARCH_VIDEO_GAME_BY_NAME = "SEARCH_VIDEO_GAME_BY_NAME";
export const GET_GENRES = "GET_GENRES";
export const GET_DETAIL = "GET_DETAIL";
export const ADD_VIDEO_GAME = "ADD_VIDEO_GAME";
export const FILTER_BY_GENRE = "FILTER_BY_GENRE";
export const FILTER_CREATED = "FILTER_CREATED";
export const ORDER_BY = 'ORDER_BY';


export const getVideoGames = () => {
  return  (dispatch) => {
    axios
      .get("/videogames")
      .then((videogames) => {
        dispatch({
          type: GET_VIDEOGAMES,
          payload: videogames.data,
        });
      })
      .catch((error) => {
        console.log(error);
      });
  };
};

export const getGenres = () => {
  return  (dispatch) => {
      axios
      .get("/genres")
      .then((genres) => {
        dispatch({
          type: GET_GENRES,
          payload: genres.data,
        });
      })
      .catch((error) => {
        console.log(error);
      });
  };
};

export const searchVideoGameByName = (payload) => {
  return  (dispatch) => {
      axios
      .get(`/videogames?name=${payload}`)
      .then((videogames) => {
        dispatch({
          type: SEARCH_VIDEO_GAME_BY_NAME,
          payload: videogames.data,
        });
      })
      .catch((error) => {
        dispatch({
          type: SEARCH_VIDEO_GAME_BY_NAME,
          payload: [],
        });
      });
  };
};

export const createVideoGame = (payload) => {
  return async (dispatch) => {
    const response = await axios.post(
      "/videogame",
      payload
    );
    return response;
  };
};

export const getDetail = (payload) => {
  return async (dispatch) => {
    const response = await axios.get(`/videogame/${payload}`);
    dispatch({
      type: GET_DETAIL,
      payload: response.data,
    });
  };
};
export function clearVideogame() {
  return function(dispatch) {
      return dispatch({
          type: GET_DETAIL,
          payload: []
      })
  }
}

export const filterVideogamesByGenre= (payload)=>{
  return {
      type: FILTER_BY_GENRE,
      payload
  }
}

export const filterCreated= (payload)=>{
  return {
      type: FILTER_CREATED,
      payload
  }
}

export const orderBy= (payload)=>{
  return {
      type: ORDER_BY,
      payload
  }
}


