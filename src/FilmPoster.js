import React from 'react';

const FilmPoster = function(props){
	let imgUrl = 'https://image.tmdb.org/t/p/w780/' + props.film.poster_path;
	return (
		<img alt="poster" src={imgUrl} />
	)
}

export default FilmPoster;
