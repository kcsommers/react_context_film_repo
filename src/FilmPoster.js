import React, { Component } from 'react';

class FilmPoster extends Component {
	render() {
		let imgUrl = 'https://image.tmdb.org/t/p/w780/' + this.props.film.poster_path;
		return (
			<img alt="poster" src={imgUrl} />
		)
	}
}

export default FilmPoster;
