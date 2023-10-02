import React from "react";

const MovieList = (props) => {
  const FavouriteComponent = props.favouriteComponent;

  return (
    <div>
      <div className="flex flex-wrap justify-center -mx-2">
        {props.movies.map((movie) => (
          <div
            key={movie.imdbID}
            className="w-[200px] sm:w-[250px] p-2 cursor-pointer hover:scale-105 ease-in-out duration-300"
          >
            <img
              className="object-cover rounded-lg"
              src={movie.Poster}
              alt="poster-img"
            />
            <div
              className="w-full h-12 bg-opacity-50 backdrop-blur backdrop-brightness-50 absolute bottom-0 left-0 flex justify-center items-center transition-opacity duration-300 opacity-0 hover:opacity-100"
              onClick={() => props.handleFavouriteClick(movie)}
            >
              <FavouriteComponent />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default MovieList;
