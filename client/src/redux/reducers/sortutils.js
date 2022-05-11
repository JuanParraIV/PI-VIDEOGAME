export const sortByNameAscending = (videogames) => {
  videogames.sort((a, b) => {
    if (a.name > b.name) {
      return 1;
    }
    if (a.name < b.name) {
      return -1;
    }
    return 0;
  });
}

export const sortyByNameDescending = (videogames) => {
  videogames.sort((a, b) => {
    if (a.name < b.name) {
    return 1;
    }
    if (a.name > b.name) {
    return -1;
    }
    return 0;
});
}
export const sortByRatingAscending = (videogames) => {
  videogames.sort((a, b) => {
    if (a.rating > b.rating) {
      return 1;
    }
    if (a.rating < b.rating) {
      return -1;
    }
    return 0;
  });
};

export const sortyByRatingDescending = (videogames) => {
    videogames.sort((a, b) => {
      if (a.rating < b.rating) {
      return 1;
      }
      if (a.rating > b.rating) {
      return -1;
      }
      return 0;
});
}