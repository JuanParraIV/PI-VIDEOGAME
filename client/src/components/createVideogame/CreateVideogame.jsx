import React from "react";
import { useState, useEffect } from "react";
import { Link, useHistory } from "react-router-dom";
import { getGenres, createVideoGame } from "../../redux/actions";
import { useDispatch, useSelector } from "react-redux";
import styles from "./CreateVideogame.module.css";
import { validate, validateOnBlur } from "./validate.js";
import { FaUndo } from "react-icons/fa";

export const CreateVideogame = () => {
  const dispatch = useDispatch();
  const history = useHistory();
  const allGenres = useSelector((state) => state.genres);
  const allPlatforms = [
    "PC",
    "PlayStation 5",
    "PlayStation 4",
    "PlayStation 3",
    "Xbox One",
    "Xbox Series S/X",
    "Xbox 360",
    "Xbox",
    "Nintendo Switch",
    "Nintendo 3DS",
    "Nintendo DS",
    "Nintendo DSi",
    "iOS",
    "Android",
    "macOS",
    "Linux",
  ];
  const [errors, setErrors] = useState({
    name: "",
    description: "",
    image: "",
    released: "",
    rating: "",
    platforms: [],
    genres: [],
  });
  const [input, setInput] = useState({
    name: "",
    description: "",
    image: "",
    released: "",
    rating: "",
    platforms: [],
    genres: [],
  });


  const handleChange = (event) => {
    const { name, value } = event.target;
    setInput(() => ({
      ...input,
      [name]: value,
    }));

    setErrors(
      validate({
        ...input,
        [name]: value,
      })
    );
  };

  const handleSelectGenres = (event) => {
    const { value } = event.target;

    setInput(() => ({
      ...input,
      genres: input.genres.includes(value)?input.value : [...input.genres, value],
    }));

    setErrors(
      validate({
        ...input,
        genres: [...input.genres, value],
      })
    );
  };

  const handleDeleteGenre = (event) => {
    setInput(() => ({
      ...input,
      genres: input.genres.filter((genre) => genre !== event),
    }));

    setErrors(
      validate({
        ...input,
        genres: input.genres.filter((genre) => genre !== event),
      })
    );
  }


  const handleSelectPlatforms = (event) => {
    const { value } = event.target;
    setInput(() => ({
      ...input,
      platforms:input.platforms.includes(value)? input.platforms :[...input.platforms, value],
    }));
    setErrors(
      validate({
        ...input,
        platforms: [...input.platforms, value],
      })
    );
  };

  const handleDeletePlatform = (event) => {

    setInput(() => ({
      ...input,
      platforms: input.platforms.filter((platform) => platform !== event),
    }));
    setErrors(
      validate({
        ...input,
        platforms: input.platforms.filter((platform) => platform !== event),
      })
    );
  }

  const handleSubmit = (event) => {
    event.preventDefault();
    setErrors(validate(input));

    if(Object.keys(errors).length === 0 &&
      input.name &&
      input.description &&
      input.image &&
      input.released &&
      input.rating &&
      input.platforms.length > 0 &&
      input.genres.length > 0){

      dispatch(createVideoGame(input));
      alert("Video Game Created");
      setInput({
        name: "",
        description: "",
      image: "",
      released: "",
      rating: "",
      platforms: [],
      genres: [],
    });
    history.push("/create");
  } else {
    alert("Please fill out all fields");

    }
  }

  const handleBlurValidate = (event) => {
    const { name, value} = event.target;
    setErrors(
      validateOnBlur({
        ...input,
        [name]: value,
      })
    );
  };

  useEffect(() => {
    dispatch(getGenres());
  }, [dispatch]);

  return (
    <div>
      <button className={styles.btn}>
        <Link to="/home">
          <FaUndo className={styles.btnIcon} />
        </Link>
      </button>

      <section className={styles.CreateVideogame}>
        <h1 className={styles.heading}>
          <span>create</span> videogame
        </h1>

        <div className={styles.row}>
          <form action="" onSubmit={(event) => handleSubmit(event)}>
            <div className={styles.inputBox}>
              <div className={styles.formLabels}>
                <label htmlFor="name">Name</label>
                <span>*</span>
              </div>
              <input
                id="name"
                type="text"
                name="name"
                placeholder="Name"
                value={input.name}
                onChange={handleChange}
              />
              {errors.name && <p className={styles.error}>{errors.name}</p>}
            </div>

            <div className={styles.inputBox}>
              <div className={styles.formLabels}>
                Image<span>*</span>
              </div>
              <input
                type="text"
                name="image"
                placeholder="Image"
                value={input.image}
                onChange={(event) => handleChange(event)}
                onBlur={(event) => handleBlurValidate(event)}
              />
              {errors.image && <p className={styles.error}>{errors.image}</p>}
            </div>

            <div className={styles.inputBox}>
              <div className={styles.formLabels}>
                <label htmlFor="description">Description</label>
                <span>*</span>
              </div>
              <textarea
                id="description"
                name="description"
                placeholder="Description"
                cols={30}
                rows={10}
                value={input.description}
                onChange={(event) => handleChange(event)}
              />
              {errors.description && (
                <p className={styles.error}>{errors.description}</p>
              )}
            </div>

            <div className={styles.inputBox}>
              <div className={styles.formLabels}>
                Released<span>*</span>
              </div>
              <input
                type="date"
                name="released"
                placeholder="Released"
                value={input.released}
                onChange={(event) => handleChange(event)}
              />
            </div>

            <div className={styles.inputBox}>
              <div className={styles.formLabels}>
                <label htmlFor="rating">Rating</label>
                <span>*</span>
              </div>
              <input
                id="rating"
                type="number"
                name="rating"
                placeholder="0.00 - 5.00"
                min={0.0}
                max={5}
                required={true}
                value={input.rating}
                onChange={(event) => handleChange(event)}
                onBlur={(event) => handleBlurValidate(event)}
              />
            </div>
            <div className={styles.inputBox}>
              <div className={styles.formLabels}>
                Platforms<span>*</span>
              </div>

              <select onChange={(event) => handleSelectPlatforms(event)}>
                <option disabled selected>
                  Select Platforms
                </option>
                {allPlatforms?.map((platform, index) => (
                  <option key={index} value={platform}>
                    {platform}
                  </option>
                ))}
              </select>
              <ul className={styles.Lists}>
                {input.platforms.map((platform,index) => (
                  <li key={index}>
                    {platform} <span onClick={()=>handleDeletePlatform(platform)}>x</span>
                  </li>
                ))}
              </ul>
              {errors.platforms && (
                <p className={styles.error}>{errors.platforms}</p>
              )}
            </div>

            <div className={styles.inputBox}>
              <div className={styles.formLabels}>
                Genres<span>*</span>
              </div>
              <select onChange={(event) => handleSelectGenres(event)}>
                <option disabled selected>
                  Select Genres
                </option>
                {allGenres?.map((genre, index) => (
                  <option key={index} value={genre.name}>
                    {genre.name}
                  </option>
                ))}
              </select>
              <ul className={styles.Lists}>
                {input.genres.map((genre,index) => (
                  <li key={index}>
                    {genre.name ? genre.game : genre} <span onClick={()=>handleDeleteGenre(genre)}>x</span>
                  </li>
                ))}
              </ul>
              {errors.genres && <p className={styles.error}>{errors.genres}</p>}
            </div>

              <button className={styles.btn} type="submit">
              create
            </button>
          </form>
        </div>
      </section>
    </div>
  );
};

export default CreateVideogame;
