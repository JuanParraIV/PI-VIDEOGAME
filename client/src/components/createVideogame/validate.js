export const validate = (input) => {
  let errors = {};
  const RegExesUrl =
  /(http(s)?:\/\/.)?(www\.)?[-a-zA-Z0-9@:%._\+~#=]{2,256}\.[a-z]{2,6}\b([-a-zA-Z0-9@:%_\+.~#?&//=]*)/g;

if (input.image && input.image.match(RegExesUrl) === null) {
  errors.image = "Is not a valid URL image";
}
  if (!input.name) errors.name = "Name is require";

  if (!input.description) errors.description = "Description is require";

  if (!input.released) errors.released = "Released Date is require";

  if (input.platforms.length === 0)
    errors.platforms = "Please select one platform at least";

  if (input.genres.length === 0)
    errors.genres = "Please select one genre at least";

  if (input.genres.length >= 4)
    errors.genres = "Please select maximum 4 genres";

  if (!input.image) errors.image = "Image is require";
  if (input.rating < 1 || input.rating > 5)
    errors.rating = "please write a number between 1 and 5";

  return errors;
};

export const validateOnBlur = (input) => {
  //validateBlur is used to validate the input when the user blurs the input
  let errors = {};
  const RegExesUrl =
    /(http(s)?:\/\/.)?(www\.)?[-a-zA-Z0-9@:%._\+~#=]{2,256}\.[a-z]{2,6}\b([-a-zA-Z0-9@:%_\+.~#?&//=]*)/g;

  if (input.image && input.image.match(RegExesUrl) === null) {
    errors.image = "Is not a valid URL image";
  }
 
  return errors;
};
